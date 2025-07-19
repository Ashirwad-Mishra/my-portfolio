import { useState, useEffect } from 'react';

const STORAGE_KEY = 'hasVisitedDigitalAtelier';

// This function checks the localStorage value immediately.
const getInitialState = (): boolean => {
  // This check prevents errors during server-side rendering.
  if (typeof window === 'undefined') {
    return false;
  }
  try {
    const hasVisited = localStorage.getItem(STORAGE_KEY);
    // If the key doesn't exist, it's a first visit.
    return !hasVisited;
  } catch (error) {
    console.error("Could not access localStorage:", error);
    return false;
  }
};

export const useFirstVisit = () => {
  // Initialize state directly with the correct value.
  const [isFirstVisit, setIsFirstVisit] = useState(getInitialState);

  useEffect(() => {
    // After the first visit, we set the flag in localStorage
    // so the tutorial doesn't show up on the next visit.
    if (isFirstVisit) {
      try {
        localStorage.setItem(STORAGE_KEY, 'true');
      } catch (error) {
        console.error("Could not set localStorage item:", error);
      }
    }
  }, [isFirstVisit]);

  return { isFirstVisit, setIsFirstVisit };
};