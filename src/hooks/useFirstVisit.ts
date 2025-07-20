// src/hooks/useFirstVisit.ts
import { useState, useEffect } from 'react';

const LOCAL_STORAGE_KEY = 'hasSeenAtelierTutorial';

export const useFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisitState] = useState(false);

  useEffect(() => {
    const hasSeen = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!hasSeen) {
      setIsFirstVisitState(true);
    }
  }, []);

  const setIsFirstVisit = (value: boolean) => {
    setIsFirstVisitState(value);
    if (!value) {
      localStorage.setItem(LOCAL_STORAGE_KEY, 'true');
    }
  };

  return { isFirstVisit, setIsFirstVisit };
};