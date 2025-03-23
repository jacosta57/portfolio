function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
                <a className="navbar-brand fw-bold">&lt;/&gt; Jayson Acosta</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="">Projects</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="">Resume</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="">Timeline</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="">Blog</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;