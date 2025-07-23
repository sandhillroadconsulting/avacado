import React from 'react';
import type { Audience } from './AudienceToggle';

interface RealWorldMapProps {
  audience: Audience;
}



const RealWorldMap = ({ audience }: RealWorldMapProps) => {

  return (
    <div className="w-full h-[300px] sm:h-[400px] lg:h-[600px] relative bg-gray-900 rounded-lg overflow-hidden">
      {/* Real Geographic Map */}
      <div className="w-full h-full relative">
        <img 
          src={`/europe_india_map_${audience}.png`}
          alt="Cross-Border Talent Migration Map showing Europe in green and India in orange"
          className="w-full h-full object-cover rounded-lg scale-90 sm:scale-90 lg:scale-100 origin-center"
          style={{
            filter: 'brightness(1.1) contrast(1.05)'
          }}
        />
        
        {/* Overlay for additional interactive elements */}
        <div className="absolute inset-0">
          {/* Subtle animation overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-10"></div>
          
          {/* Blinking dots for employee view */}
          {audience === 'employee' && (
            <>
              <div className="absolute top-[25%] left-[45%] w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-ping"></div>
              <div className="absolute top-[55%] left-[65%] w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-[75%] left-[35%] w-1.5 h-1.5 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
              <div className="absolute top-[35%] right-[25%] w-1 h-1 bg-green-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-[65%] right-[35%] w-1.5 h-1.5 bg-green-400 rounded-full opacity-25 animate-ping"></div>
            </>
          )}
          
          {/* Default floating particles for atmosphere (for employer view or general ambiance) */}
          {audience === 'employer' && (
            <>
              <div className="absolute top-[20%] left-[40%] w-2 h-2 bg-avocado rounded-full opacity-30 animate-ping"></div>
              <div className="absolute top-[60%] left-[60%] w-1 h-1 bg-avocado rounded-full opacity-40 animate-pulse"></div>
              <div className="absolute top-[80%] left-[30%] w-1.5 h-1.5 bg-avocado rounded-full opacity-20 animate-ping"></div>
              <div className="absolute top-[40%] right-[20%] w-1 h-1 bg-orange-400 rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute top-[70%] right-[40%] w-1.5 h-1.5 bg-orange-400 rounded-full opacity-25 animate-ping"></div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RealWorldMap; 