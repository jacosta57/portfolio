"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" href="/" onClick={closeMenu}>
          &lt;/&gt; Jayson Acosta
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${isActiveLink("/projects") ? "active" : ""}`}
                href="/projects"
                onClick={closeMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${isActiveLink("/certificates") ? "active" : ""}`}
                href="/certificates"
                onClick={closeMenu}
              >
                Certificates
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${isActiveLink("/resume") ? "active" : ""}`}
                href="/resume"
                onClick={closeMenu}
              >
                Resume
              </Link>
            </li>
            {/* <li className="nav-item mx-2">
              <Link
                className={`nav-link ${isActiveLink("/timeline") ? "active" : ""}`}
                href="/timeline"
                onClick={closeMenu}
              >
                Timeline
              </Link>
            </li> */}
            {/* <li className="nav-item mx-2">
              <Link
                className={`nav-link ${isActiveLink("/blog") ? "active" : ""}`}
                href="/blog"
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li> */}
            {/* <li className="nav-item mx-2">
              <Link
                className={`nav-link ${isActiveLink("/contact") ? "active" : ""}`}
                href="/contact"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
