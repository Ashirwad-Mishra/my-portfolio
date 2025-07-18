// src/Components/ProjectsView.tsx
import UIOverlay from './UIOverlay';
import { projects } from '../Data/Projects';

type ProjectsViewProps = {
  visible: boolean;
  onBack: () => void;
};

export default function ProjectsView({ visible, onBack }: ProjectsViewProps) {
  return (
    <UIOverlay visible={visible} onBack={onBack}>
      <h2 className="view-title">My Work</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <img src={project.imageUrl} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p className="project-category">{project.category}</p>
              <p className="project-description">{project.description}</p>
              {/* --- NEW: Project Links Section --- */}
              <div className="project-links">
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    View Live
                  </a>
                )}
                {project.codeUrl && (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </UIOverlay>
  );
}