import React from 'react';
import type { Audience } from './AudienceToggle';

interface RealWorldMapProps {
  audience: Audience;
}

// Using exact SVG coordinates from SimpleWorldMap.tsx (900x500 viewBox)
const BANGALORE_POSITION = { x: "65.56%", y: "48%" }; // 590/900 * 100, 240/500 * 100
const BERLIN_POSITION = { x: "48.89%", y: "29%" };    // 440/900 * 100, 145/500 * 100

const RealWorldMap = ({ audience }: RealWorldMapProps) => {

  return (
    <div className="w-full h-[300px] sm:h-[450px] lg:h-[600px] relative bg-gray-900 rounded-lg overflow-hidden">
      {/* Real Geographic Map */}
      <div className="w-full h-full relative">
        <img 
          src="/europe_india_map.png" 
          alt="Cross-Border Talent Migration Map showing Europe in green and India in orange"
          className="w-full h-full object-contain sm:object-cover rounded-lg origin-center"
          style={{
            filter: 'brightness(1.1) contrast(1.05)'
          }}
        />
        
        {/* Overlay for additional interactive elements */}
        <div className="absolute inset-0">
          {/* Subtle animation overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-10"></div>
          
          {/* Route line and animations for employee view */}
          {audience === 'employee' && (
            <>
              {/* Animated route line */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                <defs>
                  <linearGradient id="routeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0.8" />
                  </linearGradient>
                </defs>
                <path
                  d={`M ${BANGALORE_POSITION.x} ${BANGALORE_POSITION.y} Q 57.22% 38.5% ${BERLIN_POSITION.x} ${BERLIN_POSITION.y}`}
                  stroke="url(#routeGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="10,5"
                  className="animate-pulse"
                />
              </svg>
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