// src/App.tsx
import { useState, Suspense, useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import { useFirstVisit } from './hooks/useFirstVisit';
import { TutorialOverlay } from './Components/TutorialOverlay';

// Import all our components
import Workbench from './Components/Workbench';
import AboutView from './Components/AboutView';
import ProjectsView from './Components/ProjectsView';
import SkillsView from './Components/SkillsView';
import ContactView from './Components/ContactView';
import WritingsView from './Components/WritingsView';

export default function App() {
  const [view, setView] = useState('workbench');
  const canvasRef = useRef<HTMLDivElement>(null);
  const { isFirstVisit, setIsFirstVisit } = useFirstVisit();

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

  const handleCloseTutorial = () => {
    setIsFirstVisit(false);
  };

  // --- THIS IS THE FIX ---
  // If it's the first visit, we ONLY render the tutorial.
  if (isFirstVisit) {
    return <TutorialOverlay onClose={handleCloseTutorial} />;
  }

  // Otherwise, we render the main application.
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