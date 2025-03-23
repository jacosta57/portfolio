import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <Link className="navbar-brand fw-bold" to="/">&lt;/&gt; Jayson Acosta</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/projects">Projects</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/timeline">Timeline</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;