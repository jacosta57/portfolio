import Navbar from '../components/Navbar/Navbar'
import projects from '../assets/json/projects.json'
import ProjectCard from '../components/Projects/ProjectCard';

function Projects() {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
      <h2 className="mb-5 border-bottom border-primary pb-2 d-inline-block">All Projects</h2>
        <div className='row'>
          {Object.keys(projects).map((projectKey, index) => {
            const project = projects[projectKey];
            return (
                <ProjectCard project={project} key={index}/>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;