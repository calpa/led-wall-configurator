export interface LEDModel {
  id: string;
  name: string;
  series: string;
  type: 'Indoor' | 'Outdoor';
  pixelPitch: number;
  moduleWidth: number;
  moduleHeight: number;
  moduleResolution: { width: number; height: number };
  moduleArea: number;
  moduleDiagonal: number;
  brightness: number;
  refreshRate: number;
  cabinetMaterial: string;
  maintenance: string;
  description: string;
}

export const lgModels: LEDModel[] = [
  {
    id: "LSAB007",
    name: "LSAB007",
    series: "LSA",
    type: "Indoor",
    pixelPitch: 1.2,
    moduleWidth: 1.6,
    moduleHeight: 0.96,
    moduleResolution: { width: 256, height: 144 },
    moduleArea: 1.54,
    moduleDiagonal: 73.46,
    brightness: 600,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front/Rear",
    description: "Fine pixel pitch indoor LED display"
  },
  {
    id: "LSAB009",
    name: "LSAB009",
    series: "LSA",
    type: "Indoor",
    pixelPitch: 0.9,
    moduleWidth: 1.6,
    moduleHeight: 0.96,
    moduleResolution: { width: 341, height: 192 },
    moduleArea: 1.54,
    moduleDiagonal: 73.46,
    brightness: 600,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front/Rear",
    description: "Ultra-fine pixel pitch indoor LED display"
  },
  {
    id: "LSAD015",
    name: "LSAD015",
    series: "LSA",
    type: "Indoor",
    pixelPitch: 1.5,
    moduleWidth: 1.6,
    moduleHeight: 0.96,
    moduleResolution: { width: 205, height: 115 },
    moduleArea: 1.54,
    moduleDiagonal: 73.46,
    brightness: 600,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front/Rear",
    description: "Standard pixel pitch indoor LED display"
  },
  {
    id: "LSAD020",
    name: "LSAD020",
    series: "LSA",
    type: "Indoor",
    pixelPitch: 2.0,
    moduleWidth: 1.6,
    moduleHeight: 0.96,
    moduleResolution: { width: 154, height: 87 },
    moduleArea: 1.54,
    moduleDiagonal: 73.46,
    brightness: 600,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front/Rear",
    description: "Standard indoor LED display"
  },
  {
    id: "LSAD030",
    name: "LSAD030",
    series: "LSA",
    type: "Indoor",
    pixelPitch: 3.0,
    moduleWidth: 1.6,
    moduleHeight: 0.96,
    moduleResolution: { width: 103, height: 58 },
    moduleArea: 1.54,
    moduleDiagonal: 73.46,
    brightness: 600,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front/Rear",
    description: "Large pixel pitch indoor LED display"
  },
  {
    id: "LSOB006",
    name: "LSOB006",
    series: "LSO",
    type: "Outdoor",
    pixelPitch: 6.0,
    moduleWidth: 1.28,
    moduleHeight: 0.96,
    moduleResolution: { width: 64, height: 48 },
    moduleArea: 1.23,
    moduleDiagonal: 58.42,
    brightness: 6500,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front",
    description: "Outdoor LED display with high brightness"
  },
  {
    id: "LSOB008",
    name: "LSOB008",
    series: "LSO",
    type: "Outdoor",
    pixelPitch: 8.0,
    moduleWidth: 1.28,
    moduleHeight: 0.96,
    moduleResolution: { width: 48, height: 36 },
    moduleArea: 1.23,
    moduleDiagonal: 58.42,
    brightness: 6500,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front",
    description: "Standard outdoor LED display"
  },
  {
    id: "LSOB010",
    name: "LSOB010",
    series: "LSO",
    type: "Outdoor",
    pixelPitch: 10.0,
    moduleWidth: 1.28,
    moduleHeight: 0.96,
    moduleResolution: { width: 38, height: 29 },
    moduleArea: 1.23,
    moduleDiagonal: 58.42,
    brightness: 6500,
    refreshRate: 3840,
    cabinetMaterial: "Die-casting Aluminum",
    maintenance: "Front",
    description: "Large pixel pitch outdoor LED display"
  }
];
