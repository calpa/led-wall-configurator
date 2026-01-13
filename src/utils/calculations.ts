import type { WallConfig, DisplayConfig } from '../components/types';

export interface WallDimensions {
  width: number;
  height: number;
}

export interface Resolution {
  width: number;
  height: number;
}

export interface PanelDimensions {
  panelWidth: number;
  panelHeight: number;
}

/**
 * Calculate wall dimensions for display with consistent sizing
 */
export const calculateWallDimensions = (wallConfig: WallConfig): WallDimensions => {
  // Target a consistent display area (e.g., 400px × 300px area = 120,000px²)
  const targetArea = 120000; // pixels squared
  
  // Calculate current wall area
  const wallArea = wallConfig.width * wallConfig.height;
  
  // Calculate scale factor to maintain consistent visual size
  const scaleFactor = Math.sqrt(targetArea / wallArea);
  
  const width = wallConfig.width * scaleFactor;
  const height = wallConfig.height * scaleFactor;
  
  // Ensure reasonable bounds
  const minWidth = 200;
  const minHeight = 150;
  const maxWidth = 600;
  const maxHeight = 450;
  
  const finalWidth = Math.max(minWidth, Math.min(width, maxWidth));
  const finalHeight = Math.max(minHeight, Math.min(height, maxHeight));
  
  return {
    width: finalWidth,
    height: finalHeight,
  };
};

/**
 * Calculate total resolution based on LED modules
 */
export const calculateResolution = (displayConfig: DisplayConfig): Resolution => {
  const { ledModule, modulesHorizontal, modulesVertical } = displayConfig;
  
  const totalWidth = ledModule.resolution.width * modulesHorizontal;
  const totalHeight = ledModule.resolution.height * modulesVertical;
  
  return {
    width: totalWidth,
    height: totalHeight,
  };
};

/**
 * Calculate individual panel dimensions for rendering
 */
export const calculatePanelDimensions = (
  wallDimensions: WallDimensions,
  displayConfig: DisplayConfig
): PanelDimensions => {
  const panelWidth = wallDimensions.width / displayConfig.modulesHorizontal;
  const panelHeight = wallDimensions.height / displayConfig.modulesVertical;
  
  return {
    panelWidth,
    panelHeight,
  };
};

/**
 * Get unit label based on wall configuration
 */
export const getUnitLabel = (wallConfig: WallConfig): string => {
  return wallConfig.unit === 'meter' ? 'm' : 'ft';
};

/**
 * Calculate LED modules needed for wall dimensions
 */
export const calculateRequiredModules = (
  wallWidth: number,
  wallHeight: number,
  moduleWidth: number,
  moduleHeight: number
) => {
  const modulesHorizontal = Math.ceil(wallWidth / moduleWidth);
  const modulesVertical = Math.ceil(wallHeight / moduleHeight);
  const totalModules = modulesHorizontal * modulesVertical;
  
  return {
    modulesHorizontal,
    modulesVertical,
    totalModules,
  };
};

/**
 * Calculate total display area
 */
export const calculateDisplayArea = (
  moduleArea: number,
  totalModules: number
): number => {
  return moduleArea * totalModules;
};

/**
 * Format resolution for display
 */
export const formatResolution = (resolution: Resolution): string => {
  return `${resolution.width.toLocaleString()} X ${resolution.height.toLocaleString()}`;
};

/**
 * Format display area for display
 */
export const formatDisplayArea = (area: number): string => {
  return `${area.toFixed(2)} m²`;
};
