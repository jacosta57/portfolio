import 'bootstrap/dist/css/bootstrap.min.css'
import Terminal from '../components/Terminal/Terminal'
import MyCol from '../components/MyCol/MyCol'
import ProjectCard from '../components/Projects/ProjectCard'
import projects from '../assets/json/projects.json'
import Navbar from '../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
    <Navbar />
      <section className="position-relative min-vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <Terminal />
            <MyCol />
          </div>
        </div>
      </section>
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center">
      <p className="mb-1">Scroll Down</p>
      <i className="fas fa-chevron-down mt-4" style={{animation:'bounce 2s infinite'}}></i>
    </div>
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
