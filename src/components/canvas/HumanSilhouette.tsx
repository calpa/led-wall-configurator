import React from 'react';
import type { Unit } from '../types';

interface HumanSilhouetteProps {
  wallHeight: number;
  unit: Unit;
}

export const HumanSilhouette: React.FC<HumanSilhouetteProps> = ({ wallHeight, unit }) => {
  const getHumanHeightInCurrentUnit = () => {
    if (unit === 'meter') {
      return '1.83 m';
    } else {
      // Convert to feet (6 feet = 1.83 meters)
      return '6 ft';
    }
  };

  const getScaleRatio = () => {
    const humanHeightInMeters = 1.83;
    const wallHeightInMeters = unit === 'meter' ? wallHeight : wallHeight * 0.3048; // Convert feet to meters
    return (humanHeightInMeters / wallHeightInMeters) * 100; // Scale as percentage
  };

  return (
    <div 
      className="absolute -right-20 top-1/2 transform -translate-y-1/2 flex flex-col items-center"
      style={{ height: `${getScaleRatio()}%` }}
    >
      {/* Human silhouette SVG */}
      <svg
        width="30"
        height="100%"
        viewBox="0 0 30 100"
        className="fill-gray-400"
        preserveAspectRatio="xMidYMid meet"
      >
        <circle cx="15" cy="10" r="8" /> {/* Head */}
        <rect x="10" y="18" width="10" height="35" rx="2" /> {/* Body */}
        <rect x="5" y="20" width="4" height="25" rx="1" /> {/* Left arm */}
        <rect x="21" y="20" width="4" height="25" rx="1" /> {/* Right arm */}
        <rect x="11" y="53" width="4" height="30" rx="1" /> {/* Left leg */}
        <rect x="15" y="53" width="4" height="30" rx="1" /> {/* Right leg */}
      </svg>
      
      {/* Height label */}
      <div className="mt-2 text-xs text-gray-600 text-center whitespace-nowrap">
        {getHumanHeightInCurrentUnit()}
      </div>
    </div>
  );
};
