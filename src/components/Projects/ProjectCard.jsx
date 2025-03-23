function ProjectCard({project}){
    return(
        <div className="col-md-4">
              <div className="bg-black bg-opacity-75 p-3 h-100 rounded border border-dark shadow-sm">
                <img src={null} alt={project.name} className="img-fluid rounded mb-3" />
                <h5>{project.name}</h5>
                <p className="text-white">{project.description}</p>
                <div className="mb-3">
                  {project.tags.map((tag, index) => <span className="badge bg-primary bg-opacity-25 text-primary border border-primary me-1 mb-1" key={index}>{tag}</span>)}
                </div>
                <a href="#" className="btn btn-sm btn-outline-primary">View Project</a>
              </div>
            </div>
    )
}

export default ProjectCard;