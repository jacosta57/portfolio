import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <NavLink className="navbar-brand fw-bold" to="/">&lt;/&gt; Jayson Acosta</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="/projects">Projects</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="/resume">Resume</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="/timeline">Timeline</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="/blog">Blog</NavLink>
                        </li>
                        <li className="nav-item mx-2">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;