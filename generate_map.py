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

def create_europe_india_map_with_audience(audience_type):
    """Create a clean map showing Europe in green and India in orange for specific audience"""
    
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
        
        # Create figure with dark background
        fig, ax = plt.subplots(1, 1, figsize=(18, 12))
        fig.patch.set_facecolor('#01110c')  # Dark avocado background
        ax.set_facecolor('#01110c')
        
        # Set much wider extent to show both regions clearly - ZOOMED OUT A LOT
        ax.set_xlim(-40, 130)  # Longitude (much wider range)
        ax.set_ylim(10, 85)    # Latitude (much wider range)
        
        # Plot the base world map in dark blue (ocean color)
        world_subset = world.cx[-40:130, 10:85]  # Crop to our much wider area
        world_subset.plot(ax=ax, color='#243447', edgecolor='#1a2332', linewidth=0.5, alpha=0.8)
        
        # Plot Europe in green
        europe.plot(ax=ax, color='#A3C585', edgecolor='#87A96B', linewidth=2, alpha=0.9)
        
        # Plot India in orange
        india.plot(ax=ax, color='#FF8C42', edgecolor='#E67E22', linewidth=2, alpha=0.9)
        
        # Add markers for key cities based on audience
        berlin_lon, berlin_lat = 13.4050, 52.5200
        bengaluru_lon, bengaluru_lat = 77.5946, 12.9716
        
        if audience_type == 'employee':
            # Green dot on Bengaluru only for employee view
            ax.scatter(bengaluru_lon, bengaluru_lat, c='#00FF7F', s=100, marker='o', 
                      edgecolor='white', linewidth=2, zorder=5)
        
        else:  # employer view
            # Green dot on Berlin only for employer view  
            ax.scatter(berlin_lon, berlin_lat, c='#00FF7F', s=100, marker='o', 
                      edgecolor='white', linewidth=2, zorder=5)
        
        # Consistent labels for both views - no colored backgrounds
        ax.text(berlin_lon, berlin_lat + 4, '🇩🇪 Berlin', ha='center', va='bottom', 
                fontsize=16, color='white', weight='bold',
                bbox=dict(boxstyle="round,pad=0.5", facecolor='black', alpha=0.8))
        
        ax.text(bengaluru_lon, bengaluru_lat + 4, '🇮🇳 Bengaluru', ha='center', va='bottom', 
                fontsize=16, color='white', weight='bold',
                bbox=dict(boxstyle="round,pad=0.5", facecolor='black', alpha=0.8))
        
        # Add a flight path between the cities
        flight_path_x = np.linspace(berlin_lon, bengaluru_lon, 100)
        flight_path_y = np.linspace(berlin_lat, bengaluru_lat, 100)
        
        # Create a curved path (parabolic) - higher curve for much wider view
        curve_height = 18  # Much higher curve for wider view
        for i in range(len(flight_path_y)):
            t = i / (len(flight_path_y) - 1)
            flight_path_y[i] += curve_height * 4 * t * (1 - t)
        
        # Plot the flight path in WHITE
        ax.plot(flight_path_x, flight_path_y, color='white', linewidth=5, 
                linestyle='--', alpha=0.8, zorder=3)
        
        # Add airplane symbol at midpoint
        mid_idx = len(flight_path_x) // 2
        ax.text(flight_path_x[mid_idx], flight_path_y[mid_idx], '✈️', 
                fontsize=24, ha='center', va='center', zorder=4)
        
        # Remove axes and make it clean
        ax.set_xticks([])
        ax.set_yticks([])
        ax.spines['top'].set_visible(False)
        ax.spines['right'].set_visible(False)
        ax.spines['bottom'].set_visible(False)
        ax.spines['left'].set_visible(False)
        
        # Add legend with better positioning
        legend_elements = [
            plt.Rectangle((0, 0), 1, 1, facecolor='#A3C585', label='Europe'),
            plt.Rectangle((0, 0), 1, 1, facecolor='#FF8C42', label='India')
        ]
        ax.legend(handles=legend_elements, loc='lower right', 
                  facecolor='#01110c', edgecolor='#87A96B', 
                  labelcolor='white', fontsize=14)
        
        # Create public directory if it doesn't exist
        if not os.path.exists('public'):
            os.makedirs('public')
        
        # Save the map with audience-specific filename
        filename = f'public/europe_india_map_{audience_type}.png'
        plt.tight_layout()
        plt.savefig(filename, dpi=300, bbox_inches='tight', 
                    facecolor='#01110c', edgecolor='none', pad_inches=0.1)
        
        print(f"Clean {audience_type} map saved as '{filename}'")
        plt.close()
        
    except Exception as e:
        print(f"Error creating map for {audience_type}: {e}")

if __name__ == "__main__":
    # Generate both versions
    create_europe_india_map_with_audience('employee')  # Green dot on Bengaluru only
    create_europe_india_map_with_audience('employer')  # Green dot on Berlin only 