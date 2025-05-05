import { Link } from 'react-router-dom';

function ProjectCard({ project, onTagClick }) {
  const status = project.status || "Completed";

  return (
    <div className="col-md-4 mb-4">
      <Link to={`/projects/${project.name}`} className="text-decoration-none">
        <div className="card h-100 shadow-sm border-0">
          <div className="position-relative">
            <img src={project.images?.[0] || "https://picsum.photos/400/200"} className="card-img-top" alt={project.name} />
            <span className={`position-absolute top-0 end-0 mt-2 me-2 badge ${status === 'Completed' ? 'bg-success' : 'bg-primary'}`}>{status}</span>
          </div>
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">{project.name}</h5>
            <p className="card-text ">{project.shortDescription || project.description}</p>
            <div className="mb-3">
              {project.tags.slice(0, 3).map((tag, index) => (
                <span
                  className="badge bg-primary bg-opacity-25 text-primary border border-primary me-1 mb-1"
                  key={index}
                  onClick={(e) => {
                    e.preventDefault();
                    onTagClick && onTagClick(tag);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  {tag}
                </span>
              ))}
              {project.tags.length > 3 && (
                <span className="badge bg-secondary bg-opacity-25 text-secondary border border-secondary me-1 mb-1">
                  +{project.tags.length - 3}
                </span>
              )}
            </div>

            {project.metrics && project.metrics.length > 0 && (
              <div className="d-flex flex-wrap mb-2">
                {project.metrics.map((metric, idx) => (
                  <small key={idx} className="bg-light text-dark rounded-pill px-2 py-1 me-2 mb-1">
                    {metric}
                  </small>
                ))}
              </div>
            )}

            <div className="d-flex justify-content-between align-items-center mt-3">
              <small className="text-muted">
                <i className="bi bi-calendar me-1"></i> {project.date || "Ongoing"}
              </small>
              <button className="btn btn-sm btn-outline-light">View Details</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;