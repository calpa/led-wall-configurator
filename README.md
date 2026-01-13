# LED Wall Configurator 🎯

<div align="center">

![LED Wall Configurator](https://img.shields.io/badge/LED%20Wall-Configurator-blue?style=for-the-badge&logo=react&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61dafb?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.2.2-3178c6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.3.3-646cda?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.0-38b2ac?style=for-the-badge&logo=tailwindcss&logoColor=white)

*A professional LED wall planning tool for indoor and outdoor displays*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://led-wall-configurator.com)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/led-wall-configurator?style=for-the-badge&logo=github&logoColor=white)](https://github.com/yourusername/led-wall-configurator)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge&logo=github&logoColor=white)](LICENSE)

</div>

## 🌟 Features

- 🏗️ **Real-time LED Wall Planning** - Visualize LED displays with accurate module calculations
- 📏 **Professional Calculations** - Based on real LED module dimensions and wall constraints
- 🎯 **LG LED Models** - Pre-configured with actual LG LED specifications (8 models available)
- 📱 **Responsive Design** - Works seamlessly on desktop and mobile devices
- 🖼️ **Image Upload** - Upload custom images to see them displayed on LED walls
- 📊 **Safety Margins** - Shows remaining space between LED display and wall boundaries
- 🔄 **Auto-calculations** - LED modules update automatically when wall dimensions change
- 🎨 **Modern UI** - Clean, professional interface with smooth interactions
- 📄 **PDF Export** - Generate professional installation guides with detailed specifications
- 🏛️ **Flexible Model Selection** - Any LED model can be used for any wall setup type

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/led-wall-configurator.git
cd led-wall-configurator

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Build for Production

```bash
npm run build
```

## 📖 Usage

### 1. Configure Wall Dimensions
- Set wall width and height
- Choose between indoor/outdoor setups
- Select units (meters/feet)

### 2. Select LED Model
- Browse all available LG LED models (no indoor/outdoor restrictions)
- View specifications (pixel pitch, brightness, resolution)
- See module dimensions and technical details
- Any model can be used for any setup type

### 3. View LED Configuration
- Automatic module calculations
- See total modules required
- View display area and resolution
- Check remaining space (safety margins)

### 4. Add Content
- Upload custom images or use default demo image
- See images displayed on LED wall in real-time
- Switch between image and no-image modes

### 5. Export Installation Guide
- Click "Export Installation Guide" button in sidebar
- Generate professional 2-page PDF with all specifications
- Includes layout diagrams, safety guidelines, and technical details

## 🏗️ Architecture

```
src/
├── components/
│   ├── canvas/          # LED wall visualization
│   ├── sidebar/         # Configuration panels
│   ├── common/          # Reusable UI components
│   └── layout/          # Layout components
├── data/               # LED model data
├── hooks/              # React hooks
├── utils/              # Calculation utilities
└── types.ts            # TypeScript interfaces
```

## 🔧 Technologies Used

- **React 18** - UI framework with hooks
- **TypeScript** - Type safety and better development experience
- **Vite** - Fast development server and build tool
- **Tailwind CSS** - Utility-first CSS framework
- **HTML5 Canvas** - LED wall rendering
- **React-PDF** - Professional PDF generation
- **React Hooks** - State management and effects

## 📊 LED Models Included

### All Available Models (8 Total)
- **LSAB007** - 1.2mm pixel pitch, 1.6m × 0.96m (Indoor)
- **LSAB009** - 0.9mm pixel pitch, 1.6m × 0.96m (Indoor)
- **LSAD015** - 1.5mm pixel pitch, 1.6m × 0.96m (Indoor)
- **LSAD020** - 2.0mm pixel pitch, 1.6m × 0.96m (Indoor)
- **LSAD030** - 3.0mm pixel pitch, 1.6m × 0.96m (Indoor)
- **LSOB006** - 6.0mm pixel pitch, 1.28m × 0.96m (Outdoor)
- **LSOB008** - 8.0mm pixel pitch, 1.28m × 0.96m (Outdoor)
- **LSOB010** - 10.0mm pixel pitch, 1.28m × 0.96m (Outdoor)

*All models are available for selection regardless of wall setup type*

## 🎯 Key Features Explained

### Accurate Module Calculations
The configurator uses real-world LED module dimensions to calculate how many modules fit within wall boundaries:

```typescript
// Never exceeds wall dimensions
const modulesHorizontal = Math.floor(wallWidth / moduleWidth);
const modulesVertical = Math.floor(wallHeight / moduleHeight);
```

### Safety Margins
Shows remaining space between LED display and wall boundaries for mounting hardware and access.

### Real-time Updates
All calculations update automatically when you change wall dimensions or select different LED models.

### Flexible Model Selection
Users can choose any LED model regardless of wall setup type (indoor/outdoor), providing maximum flexibility for real-world installation scenarios.

### Professional PDF Export
Generate comprehensive 2-page installation guides with:
- **Page 1**: Project information, specifications, and module requirements
- **Page 2**: Installation layout diagrams and safety guidelines
- **Professional Layout**: Clean, print-ready formatting with proper page breaks

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **LG Electronics** - For LED module specifications and technical data
- **React Team** - For the amazing React framework
- **Vite Team** - For the lightning-fast build tool
- **Tailwind CSS** - For the utility-first CSS framework

---

<div align="center">

**Built with ❤️ for LED installation professionals**

[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646cda?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

</div>
