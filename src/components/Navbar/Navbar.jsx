function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark">
            <div class="container">
                <a class="navbar-brand fw-bold">&lt;/&gt; Jayson Acosta</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="">Projects</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="">Resume</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="">Timeline</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="">Blog</a>
                        </li>
                        <li class="nav-item mx-2">
                            <a class="nav-link" href="">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;