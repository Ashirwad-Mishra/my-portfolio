// src/Components/TutorialOverlay.tsx
import React from 'react';
import './TutorialOverlay.css'; 
interface TutorialOverlayProps {
  onClose: () => void;
}

export const TutorialOverlay: React.FC<TutorialOverlayProps> = ({ onClose }) => {
  return (
    // The semi-transparent backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 animate-in fade-in">
      
      {/* The note card, using styles from your project */}
      <div className="bg-stone-100 text-stone-800 rounded-lg shadow-2xl p-8 max-w-md w-full mx-4 animate-in fade-in zoom-in-95">
        
        <h2 className="text-2xl font-bold mb-4">
          Welcome to my Digital Atelier
        </h2>
        
        <p className="mb-6 text-stone-600">
          This is an interactive space. Here's how to look around:
        </p>
        
        <ul className="space-y-4 mb-8">
          <li className="flex items-center">
            <span className="text-xl mr-4">👆</span>
            <div>
              <h3 className="font-semibold">Click & Drag</h3>
              <p className="text-sm text-stone-500">Move the workbench to change your view.</p>
            </div>
          </li>
          <li className="flex items-center">
            <span className="text-xl mr-4">🧱</span>
            <div>
              <h3 className="font-semibold">Click an Object</h3>
              <p className="text-sm text-stone-500">Select an object to discover my work.</p>
            </div>
          </li>
        </ul>
        
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300"
        >
          Begin Exploring
        </button>
      </div>
    </div>
  );
};