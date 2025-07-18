// src/App.tsx
import { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';

// Import all our components
import Workbench from './Components/Workbench';
import AboutView from './Components/AboutView';
import ProjectsView from './Components/ProjectsView';
import SkillsView from './Components/SkillsView';
import ContactView from './Components/ContactView';
import WritingsView from './Components/WritingsView';

export default function App() {
  const [view, setView] = useState('workbench'); // 'workbench', 'about', 'projects', 'skills', 'contact', 'writings'
  const canvasRef = useRef<HTMLDivElement>(null);

  // This effect handles the fade transition between the 3D view and the 2D panels
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      if (view === 'workbench') {
        canvasElement.style.opacity = "1";
        canvasElement.style.pointerEvents = 'auto';
      } else {
        canvasElement.style.opacity = "0";
        canvasElement.style.pointerEvents = 'none';
      }
    }
  }, [view]);

  const handleBack = () => {
    setView('workbench');
  };

  return (
    <main className="app-main">
      {/* 3D Scene Container */}
      <div ref={canvasRef} className="canvas-container">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 50 }}>
          <Suspense fallback={null}>
            <Workbench setView={setView} />
          </Suspense>
        </Canvas>
      </div>
      
      {/* --- FIXED --- Header with correct syntax */}
      <div className="header-title">
          <h1>Ashirwad Mishra</h1>
          <p>Digital Atelier</p>
      </div>

      {/* 2D UI Overlay Views */}
      <AboutView visible={view === 'about'} onBack={handleBack} />
      <ProjectsView visible={view === 'projects'} onBack={handleBack} />
      <SkillsView visible={view === 'skills'} onBack={handleBack} />
      <ContactView visible={view === 'contact'} onBack={handleBack} />
      <WritingsView visible={view === 'writings'} onBack={handleBack} />
    </main>
  );
}