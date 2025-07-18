// src/Components/WritingsView.tsx
import UIOverlay from './UIOverlay';
import { writings } from '../Data/writings';

type WritingsViewProps = {
  visible: boolean;
  onBack: () => void;
};

export default function WritingsView({ visible, onBack }: WritingsViewProps) {
  return (
    <UIOverlay visible={visible} onBack={onBack}>
      <h2 className="view-title">My Writings</h2>
      <div className="writings-list">
        {writings.map(writing => (
          <a key={writing.id} href={writing.articleUrl} target="_blank" rel="noopener noreferrer" className="writing-card">
            <div className="writing-info">
              <h3>{writing.title}</h3>
              <p className="writing-publication">{writing.publication}</p>
              <p className="writing-description">{writing.description}</p>
            </div>
            <div className="writing-link">
              <span>Read Article &rarr;</span>
            </div>
          </a>
        ))}
      </div>
    </UIOverlay>
  );
}