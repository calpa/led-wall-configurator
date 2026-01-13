import { useState, useCallback, useEffect } from 'react';
import type {
  ConfiguratorState,
  WallConfig,
  DisplayConfig,
  ContentConfig,
  ViewState,
  Unit,
  WallSetup,
  Resolution,
  ContentType,
} from '../components/types';
import { calculateRequiredModules } from '../utils/calculations';

const defaultState: ConfiguratorState = {
  wallConfig: {
    setup: 'indoor' as WallSetup,
    width: 5, // Default indoor width
    height: 3, // Default indoor height
    unit: 'meter' as Unit,
  },
  displayConfig: {
    modelName: 'LSAB007',
    ledModule: {
      width: 1.6, // 1.6 meters
      height: 0.96, // 0.96 meters
      resolution: {
        width: 256,
        height: 144,
      },
      displayArea: 1.54, // 1.54 m²
      diagonal: 73.46, // 73.46 inches
    },
    modulesHorizontal: 4,
    modulesVertical: 3,
    totalModules: 12,
    resolution: 'FHD' as Resolution,
  },
  contentConfig: {
    type: 'image' as ContentType,
    imageUrl: '/public/demo.jpg',
  },
  viewState: {
    zoom: 1,
    isBlueprintMode: false,
  },
};

export const useConfiguratorState = () => {
  const [state, setState] = useState<ConfiguratorState>(defaultState);

  // Auto-calculate LED modules when wall dimensions change
  useEffect(() => {
    const { width, height } = state.wallConfig;
    const { ledModule } = state.displayConfig;
    
    // Calculate required modules based on current wall dimensions
    const moduleRequirements = calculateRequiredModules(
      width,
      height,
      ledModule.width,
      ledModule.height
    );
    
    // Update display config with calculated modules
    setState(prev => ({
      ...prev,
      displayConfig: {
        ...prev.displayConfig,
        ...moduleRequirements,
      },
    }));
  }, [state.wallConfig.width, state.wallConfig.height, state.displayConfig.ledModule]);

  const updateWallConfig = useCallback((updates: Partial<WallConfig>) => {
    setState(prev => {
      const newWallConfig = { ...prev.wallConfig, ...updates };
      
      // Auto-update dimensions when switching between indoor/outdoor
      if ('setup' in updates) {
        if (updates.setup === 'outdoor') {
          newWallConfig.width = 20; // Default outdoor width
          newWallConfig.height = 12; // Default outdoor height
        } else {
          newWallConfig.width = 5; // Default indoor width
          newWallConfig.height = 3; // Default indoor height
        }
      }
      
      return {
        ...prev,
        wallConfig: newWallConfig,
      };
    });
  }, []);

  const updateDisplayConfig = useCallback((updates: Partial<DisplayConfig>) => {
    setState(prev => ({
      ...prev,
      displayConfig: { ...prev.displayConfig, ...updates },
    }));
  }, []);

  const updateContentConfig = useCallback((updates: Partial<ContentConfig>) => {
    setState(prev => ({
      ...prev,
      contentConfig: { ...prev.contentConfig, ...updates },
    }));
  }, []);

  const updateViewState = useCallback((updates: Partial<ViewState>) => {
    setState(prev => ({
      ...prev,
      viewState: { ...prev.viewState, ...updates },
    }));
  }, []);

  const resetToDefaults = useCallback(() => {
    setState(defaultState);
  }, []);

  const fitToWall = useCallback(() => {
    // This function now just ensures modules are calculated (already done by useEffect)
    const { width, height } = state.wallConfig;
    const { ledModule } = state.displayConfig;
    
    const moduleRequirements = calculateRequiredModules(
      width,
      height,
      ledModule.width,
      ledModule.height
    );
    
    updateDisplayConfig(moduleRequirements);
  }, [state.wallConfig, state.displayConfig.ledModule, updateDisplayConfig]);

  return {
    state,
    updateWallConfig,
    updateDisplayConfig,
    updateContentConfig,
    updateViewState,
    resetToDefaults,
    fitToWall,
  };
};
