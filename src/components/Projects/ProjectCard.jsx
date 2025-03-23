import { Link } from 'react-router-dom'

function ProjectCard({project}){
    return(
        <div className="col-md-4">
          
          <Link to={`/projects/${project.name}`}>
              <div className="bg-black bg-opacity-75 p-3 h-100 rounded border border-dark shadow-sm">
                <h5>{project.name}</h5>
                <p className="text-white">{project.description}</p>
                <div className="mb-3">
                  {project.tags.map((tag, index) => <span className="badge bg-primary bg-opacity-25 text-primary border border-primary me-1 mb-1" key={index}>{tag}</span>)}
                </div>
              </div>
              </Link>
            </div>
    )
}

export default ProjectCard;