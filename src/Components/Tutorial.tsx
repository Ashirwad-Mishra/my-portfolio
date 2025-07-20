// src/Components/Tutorial.tsx
import { useState, useEffect } from 'react';
import './Tutorial.css'; 
const tutorialSteps = [
  {
    title: "Welcome!",
    text: "This is my Digital Atelier, a space to explore my work. Let me show you around.",
  },
  {
    title: "Look Around",
    text: "You can rotate, pan, and zoom the view by clicking and dragging with your mouse or using the scroll wheel.",
  },
  {
    title: "Interact with the Bricks",
    text: "Each item on the desk is a part of my story. You can drag them around or click on them to learn more.",
  },
  {
    title: "Enjoy Your Visit",
    text: "Feel free to explore. Thanks for stopping by!",
  },
];

export default function Tutorial() {
  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  // On the first load, check if the tutorial has been seen before.
  useEffect(() => {
    const hasSeenTutorial = localStorage.getItem('hasSeenAtelierTutorial');
    if (!hasSeenTutorial) {
      setIsVisible(true);
    }
  }, []);

  const handleNext = () => {
    if (step < tutorialSteps.length - 1) {
      setStep(step + 1);
    } else {
      handleClose();
    }
  };

  const handleClose = () => {
    localStorage.setItem('hasSeenAtelierTutorial', 'true');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  const currentStep = tutorialSteps[step];
  const isLastStep = step === tutorialSteps.length - 1;

  return (
    <div className="tutorial-overlay">
      <div className="tutorial-modal">
        <h3>{currentStep.title}</h3>
        <p>{currentStep.text}</p>
        <div className="tutorial-actions">
          <button onClick={handleClose} className="skip-button">Skip</button>
          <button onClick={handleNext} className="next-button">
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}
