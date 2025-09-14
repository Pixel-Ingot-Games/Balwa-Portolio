import React, { useState, useEffect } from 'react';
import { getProjectImages, getProjectThumbnail } from './data/projects';

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  images?: string[];
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
  const [projectImages, setProjectImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (project && isOpen) {
      setLoading(true);
      getProjectImages(project.id)
        .then(images => {
          setProjectImages(images);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading project images:', error);
          setProjectImages([]);
          setLoading(false);
        });
    }
  }, [project, isOpen]);

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
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-book-layout">
          {/* Left side - Project thumbnail and gallery */}
          <div className="modal-left">
            <div className="modal-thumbnail">
              <img 
                src={getProjectThumbnail(project.id)} 
                alt={project.title}
                className="modal-main-image"
              />
            </div>
            {loading ? (
              <div className="modal-gallery-left">
                <h3>Gallery</h3>
                <div className="modal-images-left">
                  <p>Loading images...</p>
                </div>
              </div>
            ) : projectImages.length > 0 ? (
              <div className="modal-gallery-left">
                <h3>Gallery</h3>
                <div className="modal-images-left">
                  {projectImages.map((image, index) => (
                    <img 
                      key={index} 
                      src={image} 
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="modal-image-left"
                    />
                  ))}
                </div>
              </div>
            ) : null}
          </div>

          {/* Right side - Project details */}
          <div className="modal-right">
            <div className="modal-header">
              <h2 className="modal-title">{project.title}</h2>
            </div>
            
            <div className="modal-body">
              <div className="modal-section">
                <h3>Description</h3>
                <ul className="modal-description-list">
                  {project.longDescription.split('. ').map((point, index) => (
                    point.trim() && (
                      <li key={index} className="modal-description-item">
                        {point.trim().endsWith('.') ? point.trim() : point.trim() + '.'}
                      </li>
                    )
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
