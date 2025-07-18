// src/Components/UIOverlay.tsx
import React from 'react';

type UIOverlayProps = {
  visible: boolean;
  onBack: () => void;
  children?: React.ReactNode;
};

export default function UIOverlay({ children, visible, onBack }: UIOverlayProps) {
  if (!visible) return null;
  
  return (
    <div className="ui-overlay">
      <div className="ui-modal">
        <button onClick={onBack} className="ui-close-button">&times;</button>
        {children}
      </div>
    </div>
  );
}