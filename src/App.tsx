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
import Tutorial from './Components/Tutorial'; // Import the new Tutorial component

export default function App() {
  const [view, setView] = useState('workbench');
  const canvasRef = useRef<HTMLDivElement>(null);

  // This effect handles the fade transition between the 3D view and the 2D panels
  useEffect(() => {
    const canvasElement = canvasRef.current;
    if (canvasElement) {
      canvasElement.style.opacity = view === 'workbench' ? "1" : "0";
      canvasElement.style.pointerEvents = view === 'workbench' ? 'auto' : 'none';
    }
  }, [view]);

  const handleBack = () => {
    setView('workbench');
  };

  return (
    <main className="app-main">
      {/* The Tutorial will automatically show itself on the first visit */}
      <Tutorial />

      <div ref={canvasRef} className="canvas-container">
        <Canvas shadows camera={{ position: [0, 4, 8], fov: 50 }}>
          <Suspense fallback={null}>
            <Workbench setView={setView} />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="header-title">
          <h1>Ashirwad Mishra</h1>
          <p>Digital Atelier</p>
      </div>

      <AboutView visible={view === 'about'} onBack={handleBack} />
      <ProjectsView visible={view === 'projects'} onBack={handleBack} />
      <SkillsView visible={view === 'skills'} onBack={handleBack} />
      <ContactView visible={view === 'contact'} onBack={handleBack} />
      <WritingsView visible={view === 'writings'} onBack={handleBack} />
    </main>
  );
}