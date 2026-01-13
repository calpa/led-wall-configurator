import React from 'react';
import { HumanSilhouette } from './HumanSilhouette';
import type { WallConfig, DisplayConfig, ContentConfig } from '../types';
import {
  calculateWallDimensions,
  calculateResolution,
  calculatePanelDimensions,
  getUnitLabel,
  formatResolution,
} from '../../utils/calculations';

interface LedWallPreviewProps {
  wallConfig: WallConfig;
  displayConfig: DisplayConfig;
  contentConfig: ContentConfig;
}

export const LedWallPreview: React.FC<LedWallPreviewProps> = ({
  wallConfig,
  displayConfig,
  contentConfig,
}) => {
  const wallDimensions = calculateWallDimensions(wallConfig);
  const resolution = calculateResolution(displayConfig);
  const panelDimensions = calculatePanelDimensions(wallDimensions, displayConfig);
  const unitLabel = getUnitLabel(wallConfig);

  return (
    <div className="relative">
      {/* Main LED Wall Container */}
      <div className="relative">
        {/* Horizontal dimension label */}
        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-sm font-medium text-gray-700">
          {wallConfig.width} {unitLabel}
        </div>

        {/* Vertical dimension label */}
        <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-sm font-medium text-gray-700">
          {wallConfig.height} {unitLabel}
        </div>

        {/* Measurement lines and dots */}
        <div className="absolute -top-6 left-0 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute -top-6 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute top-0 -left-6 w-2 h-2 bg-red-500 rounded-full"></div>
        <div className="absolute bottom-0 -left-6 w-2 h-2 bg-red-500 rounded-full"></div>

        {/* Panel dimension indicators */}
        <div className="absolute -top-10 left-0 text-xs text-gray-500 font-medium">
          {wallConfig.unit === 'meter' ? '0.6m' : '2ft'}
        </div>
        <div className="absolute -left-10 top-0 text-xs text-gray-500 font-medium writing-mode-vertical">
          {wallConfig.unit === 'meter' ? '0.34m' : '1.1ft'}
        </div>

        {/* LED Wall - Grid of Individual Panels */}
        <div
          className="relative overflow-hidden"
          style={{ width: wallDimensions.width, height: wallDimensions.height }}
        >
          {/* Grid of LED Panels */}
          <div className="grid gap-1" style={{ 
            gridTemplateColumns: `repeat(${displayConfig.modulesHorizontal}, 1fr)`,
            gridTemplateRows: `repeat(${displayConfig.modulesVertical}, 1fr)`,
            width: '100%',
            height: '100%'
          }}>
            {Array.from({ length: displayConfig.modulesHorizontal * displayConfig.modulesVertical }).map((_, index) => {
              const row = Math.floor(index / displayConfig.modulesHorizontal);
              const col = index % displayConfig.modulesHorizontal;
              
              return (
                <div
                  key={index}
                  className="bg-gray-900 border border-gray-700 rounded-sm overflow-hidden relative"
                  style={{
                    boxShadow: 'inset 0 0 4px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {/* LED panel surface */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900">
                    {/* Panel content */}
                    {contentConfig.type === 'image' && (
                      <div className="absolute inset-0">
                        {/* Sample image content with better integration */}
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 opacity-90">
                          <div className="absolute inset-0 bg-black opacity-20"></div>
                          {/* Subtle cloud pattern */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white opacity-30 text-2xl">☁️</div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {/* Panel identifier - better positioned and styled */}
                    <div className="absolute top-1 left-1 bg-black bg-opacity-70 text-white px-1.5 py-0.5 rounded font-mono text-xs font-medium">
                      {row + 1}-{col + 1}
                    </div>
                    
                    {/* Panel frame/bezel effect */}
                    <div className="absolute inset-0 border border-gray-600 pointer-events-none"></div>
                    
                    {/* LED pixel effect */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '4px 4px'
                      }}></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Remove the large overlay that was causing the overlap */}
        </div>

        {/* Resolution label */}
        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-sm text-gray-600">
          Resolution: {formatResolution(resolution)}
        </div>

        {/* Human silhouette for scale */}
        <HumanSilhouette wallHeight={wallConfig.height} unit={wallConfig.unit} />
      </div>
    </div>
  );
};
