import geopandas as gpd
import matplotlib.pyplot as plt
import matplotlib.patches as patches
from matplotlib.patches import FancyBboxPatch
import numpy as np
import warnings
import requests
import zipfile
import os
warnings.filterwarnings('ignore')

def download_naturalearth_data():
    """Download Natural Earth data if not already present"""
    data_dir = 'naturalearth_data'
    if not os.path.exists(data_dir):
        os.makedirs(data_dir)
    
    shapefile_path = os.path.join(data_dir, 'ne_110m_admin_0_countries.shp')
    
    if not os.path.exists(shapefile_path):
        print("Downloading Natural Earth data...")
        # Correct URL for Natural Earth data
        url = 'https://naciscdn.org/naturalearth/110m/cultural/ne_110m_admin_0_countries.zip'
        
        try:
            # Download the zip file
            response = requests.get(url, timeout=30)
            response.raise_for_status()  # Raise an exception for bad status codes
            
            zip_path = os.path.join(data_dir, 'countries.zip')
            
            with open(zip_path, 'wb') as f:
                f.write(response.content)
            
            # Extract the zip file
            with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                zip_ref.extractall(data_dir)
            
            # Clean up zip file
            os.remove(zip_path)
            print("Data downloaded successfully!")
            
        except Exception as e:
            print(f"Error downloading data: {e}")
            print("Trying alternative approach...")
            return None
    
    return shapefile_path

def create_mobile_map_with_red_dot(audience_type):
    """Create a mobile-optimized portrait map with red dot for specific audience"""
    
    # Try to download and load world data
    shapefile_path = download_naturalearth_data()
    
    if shapefile_path is None or not os.path.exists(shapefile_path):
        print("Could not load geographic data")
        return
    
    try:
        print(f"Loading world data for {audience_type} view...")
        world = gpd.read_file(shapefile_path)
        
        # Define the countries we want to highlight
        europe_countries = [
            'Germany', 'France', 'Italy', 'Spain', 'United Kingdom', 'Poland', 
            'Netherlands', 'Belgium', 'Greece', 'Portugal', 'Czech Republic',
            'Hungary', 'Sweden', 'Austria', 'Switzerland', 'Denmark', 'Finland',
            'Norway', 'Ireland', 'Croatia', 'Slovakia', 'Slovenia', 'Estonia',
            'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Cyprus', 'Bulgaria',
            'Romania'
        ]
        
        # Filter for Europe and India
        europe = world[world['NAME'].isin(europe_countries)]
        india = world[world['NAME'] == 'India']
        
        # Create figure with wide landscape orientation for mobile (to show Americas to Asia)
        fig, ax = plt.subplots(1, 1, figsize=(16, 9))
        fig.patch.set_facecolor('#2D3E2F')  # Slightly lighter dark green for mobile
        ax.set_facecolor('#2D3E2F')
        
        # Set extent to show heavily zoomed-out world view with maximum context
        ax.set_xlim(-250, 250)  # Longitude (heavily extended for maximum zoom-out)
        ax.set_ylim(-120, 140)  # Latitude (heavily extended for maximum zoom-out)
        
        # Plot the entire world map - all countries in blue first
        world.plot(ax=ax, color='#1a2e3a', edgecolor='#0f1f28', linewidth=0.3, alpha=0.7)
        
        # Plot Europe in brighter green for mobile visibility
        europe.plot(ax=ax, color='#7FB069', edgecolor='#6B9B47', linewidth=1.5, alpha=0.9)
        
        # Plot India in vibrant orange for mobile visibility
        india.plot(ax=ax, color='#FF7F50', edgecolor='#FF6347', linewidth=1.5, alpha=0.9)
        
        # Add markers and labels for key cities
        berlin_lon, berlin_lat = 13.4050, 52.5200
        bengaluru_lon, bengaluru_lat = 77.5946, 12.9716
        
        if audience_type == 'employee':
            # Red dot on Berlin for employee view
            ax.scatter(berlin_lon, berlin_lat, c='#FF0000', s=120, marker='o', 
                      edgecolor='white', linewidth=3, zorder=5, alpha=1.0)
            
            # Green marker for Bengaluru (source of talent)
            ax.scatter(bengaluru_lon, bengaluru_lat, c='#00FF7F', s=80, marker='o', 
                      edgecolor='white', linewidth=2, zorder=5, alpha=1.0)
            
            # Labels
            ax.text(berlin_lon, berlin_lat + 2, '🇩🇪 Berlin', ha='center', va='bottom', 
                    fontsize=8, color='white', weight='bold',
                    bbox=dict(boxstyle="round,pad=0.2", facecolor='#FF0000', alpha=0.95, edgecolor='white', linewidth=1))
            
            ax.text(bengaluru_lon, bengaluru_lat + 2, '🇮🇳 Bengaluru', ha='center', va='bottom', 
                    fontsize=8, color='white', weight='bold',
                    bbox=dict(boxstyle="round,pad=0.2", facecolor='#2D3E2F', alpha=0.95, edgecolor='white', linewidth=1))
        
        else:  # employer view
            # Regular marker for Berlin
            ax.scatter(berlin_lon, berlin_lat, c='#00FF7F', s=80, marker='o', 
                      edgecolor='white', linewidth=2, zorder=5, alpha=1.0)
            
            # Red dot on Bengaluru for employer view
            ax.scatter(bengaluru_lon, bengaluru_lat, c='#FF0000', s=120, marker='o', 
                      edgecolor='white', linewidth=3, zorder=5, alpha=1.0)
            
            # Labels
            ax.text(berlin_lon, berlin_lat + 2, '🇩🇪 Berlin', ha='center', va='bottom', 
                    fontsize=8, color='white', weight='bold',
                    bbox=dict(boxstyle="round,pad=0.2", facecolor='#2D3E2F', alpha=0.95, edgecolor='white', linewidth=1))
            
            ax.text(bengaluru_lon, bengaluru_lat + 2, '🇮🇳 Bengaluru', ha='center', va='bottom', 
                    fontsize=8, color='white', weight='bold',
                    bbox=dict(boxstyle="round,pad=0.2", facecolor='#FF0000', alpha=0.95, edgecolor='white', linewidth=1))
        
        # Create a curved connection path between cities
        connection_x = np.linspace(berlin_lon, bengaluru_lon, 60)
        connection_y = np.linspace(berlin_lat, bengaluru_lat, 60)
        
        # Add curve for global map bounds (entire world view)
        curve_height = 20  # Higher curve for global view
        for i in range(len(connection_y)):
            t = i / (len(connection_y) - 1)
            connection_y[i] += curve_height * 4 * t * (1 - t)
        
        # Plot connection line with prominent styling for global view
        ax.plot(connection_x, connection_y, color='#FFFFFF', linewidth=5, 
                alpha=0.8, zorder=3, linestyle='--')
        
        # Add airplane symbol with very small size for heavily zoomed-out view
        mid_idx = len(connection_x) // 2
        ax.text(connection_x[mid_idx], connection_y[mid_idx] + 1, '✈️', 
                fontsize=12, ha='center', va='center', zorder=4)
        
        # Remove all axes and borders for clean mobile look
        ax.set_xticks([])
        ax.set_yticks([])
        for spine in ax.spines.values():
            spine.set_visible(False)
        
        # Create public directory if it doesn't exist
        if not os.path.exists('public'):
            os.makedirs('public')
        
        # Save the mobile-optimized map with specific audience suffix
        filename = f'public/europe_india_map_mobile_{audience_type}.png'
        plt.tight_layout()
        plt.savefig(filename, dpi=300, bbox_inches='tight', 
                    facecolor='#2D3E2F', edgecolor='none', pad_inches=0)
        
        print(f"Mobile-optimized {audience_type} map saved as '{filename}'")
        plt.close()
        
    except Exception as e:
        print(f"Error creating mobile map for {audience_type}: {e}")

if __name__ == "__main__":
    # Generate both versions
    create_mobile_map_with_red_dot('employee')  # Red dot on Berlin
    create_mobile_map_with_red_dot('employer')  # Red dot on Bengaluru 