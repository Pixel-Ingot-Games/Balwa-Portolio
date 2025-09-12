import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  images: string[];
  status: string;
  platforms: string[];
  year: string;
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div 
      className={`project-modal ${isOpen ? 'active' : ''}`}
      onClick={handleBackdropClick}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">{project.title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            ×
          </button>
        </div>
        
        <div className="modal-body">
          <div className="modal-section">
            <h3>Description</h3>
            <p className="modal-description">{project.longDescription}</p>
          </div>

          <div className="modal-section">
            <h3>Technologies</h3>
            <div className="modal-tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3>Key Features</h3>
            <ul className="modal-features">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="modal-section">
            <h3>Project Details</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
              <div>
                <strong style={{ color: '#0bd7b0' }}>Status:</strong> {project.status}
              </div>
              <div>
                <strong style={{ color: '#0bd7b0' }}>Year:</strong> {project.year}
              </div>
            </div>
            <div>
              <strong style={{ color: '#0bd7b0' }}>Platforms:</strong> {project.platforms.join(', ')}
            </div>
          </div>

          {project.images.length > 0 && (
            <div className="modal-section">
              <h3>Gallery</h3>
              <div className="modal-images">
                {project.images.map((image, index) => (
                  <img 
                    key={index} 
                    src={image} 
                    alt={`${project.title} screenshot ${index + 1}`}
                    className="modal-image"
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
