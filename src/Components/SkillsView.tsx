// src/Components/SkillsView.tsx
import UIOverlay from './UIOverlay';
import { skills } from '../Data/Skills';

type SkillsViewProps = {
  visible: boolean;
  onBack: () => void;
};

export default function SkillsView({ visible, onBack }: SkillsViewProps) {
  return (
    <UIOverlay visible={visible} onBack={onBack}>
      <h2 className="view-title">My Toolkit</h2>
      <div className="skills-grid">
        {skills.map(skill => (
          <div key={skill.name} className="skill-card">
            <img src={skill.iconUrl} alt={`${skill.name} icon`} className="skill-icon" />
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </UIOverlay>
  );
}