export type Unit = 'meter' | 'feet';
export type WallSetup = 'indoor' | 'outdoor';
export type Resolution = 'FHD' | 'UHD';
export type ContentType = 'image' | 'video' | 'noImage' | 'custom';

export interface WallConfig {
  setup: WallSetup;
  width: number;
  height: number;
  unit: Unit;
}

export interface LEDModule {
  width: number; // in meters
  height: number; // in meters
  resolution: {
    width: number;
    height: number;
  };
  displayArea: number; // in square meters
  diagonal: number; // in inches
}

export interface DisplayConfig {
  modelName: string;
  ledModule: LEDModule;
  modulesHorizontal: number;
  modulesVertical: number;
  totalModules: number;
  resolution: Resolution;
}

export interface ContentConfig {
  type: ContentType;
  imageUrl?: string;
  imageFile?: File;
}

export interface ViewState {
  zoom: number;
  isBlueprintMode: boolean;
}

export interface ConfiguratorState {
  wallConfig: WallConfig;
  displayConfig: DisplayConfig;
  contentConfig: ContentConfig;
  viewState: ViewState;
}

export interface ValidationError {
  field: string;
  message: string;
}
