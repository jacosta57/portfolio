import Terminal from 'components/Terminal'
import MyCol from 'components/MyCol'
import ProjectCard from 'components/ProjectCard'
import projects from 'json/projects.json'
import { Link } from 'react-router-dom'
import { FaChevronDown } from 'react-icons/fa'

function App() {
  return (
    <>
      <section className="position-relative min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7 col-md-12 mb-4 mb-lg-0">
              <Terminal />
            </div>
            <div className="col-lg-5 col-md-12 d-flex justify-content-center justify-content-lg-end">
              <MyCol />
            </div>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center mt-4">
          <p className="mb-1">Scroll Down</p>
          <FaChevronDown className="mt-4" style={{animation:'bounce 2s infinite'}}></FaChevronDown>
        </div>
        </div>
       
      </section>
      
      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-5 border-bottom border-primary pb-2 d-inline-block">Featured Projects</h2>
          <div className="row g-4">
            <ProjectCard project={projects['COVEY Discord Bot']}/>
            <ProjectCard project={projects['Konnect']}/>
            <ProjectCard project={projects['FinAntes']}/>
          </div>
          <div className="text-center mt-4">
            <Link to="/projects" className="btn btn-outline-light">See All Projects</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default App