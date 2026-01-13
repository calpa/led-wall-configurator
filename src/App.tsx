import { Header } from './components/layout/Header';
import { Sidebar } from './components/layout/Sidebar';
import { Canvas } from './components/layout/Canvas';
import { useConfiguratorState } from './hooks/useConfiguratorState';

function App() {
  const {
    state,
    updateWallConfig,
    updateDisplayConfig,
    updateContentConfig,
    resetToDefaults,
  } = useConfiguratorState();

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <Header />
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        <Sidebar
          state={state}
          updateWallConfig={updateWallConfig}
          updateDisplayConfig={updateDisplayConfig}
          updateContentConfig={updateContentConfig}
        />
        <Canvas
          state={state}
        />
      </div>
    </div>
  );
}

export default App;
