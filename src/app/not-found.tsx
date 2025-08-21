import Link from "next/link";
import {
  FaHome,
  FaProjectDiagram,
  FaCertificate,
  FaFileAlt,
  FaClock,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

export default function NotFound() {
  const navigationOptions = [
    {
      name: "Home",
      href: "/",
      icon: FaHome,
      description: "Return to the main page",
    },
    {
      name: "Projects",
      href: "/projects",
      icon: FaProjectDiagram,
      description: "View my projects",
    },
    {
      name: "Certificates",
      href: "/certificates",
      icon: FaCertificate,
      description: "See my certifications",
    },
    {
      name: "Resume",
      href: "/resume",
      icon: FaFileAlt,
      description: "Download my resume",
    },
    {
      name: "Timeline",
      href: "/timeline",
      icon: FaClock,
      description: "View my journey",
    },
    {
      name: "Blog",
      href: "/blog",
      icon: FaBlog,
      description: "Read my articles",
    },
    {
      name: "Contact",
      href: "/contact",
      icon: FaEnvelope,
      description: "Get in touch",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="modern-card bg-dark text-white p-5 text-center mb-5">
            <h1 className="display-1 text-primary mb-3">404</h1>
            <h2 className="border-bottom border-primary pb-2 d-inline-block mb-4">
              Page Not Found
            </h2>
            <p className="lead mb-4">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <p className="text-muted">
              Don&apos;t worry! You can navigate to any section of my portfolio
              using the links below.
            </p>
          </div>

          {/* Navigation Options */}
          <div className="mb-4">
            <h3 className="border-bottom border-primary pb-2 d-inline-block mb-4">
              Where would you like to go?
            </h3>
          </div>

          <div className="row g-4 mb-5">
            {navigationOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <div className="col-md-6 col-lg-4" key={index}>
                  <Link href={option.href} className="text-decoration-none">
                    <div className="modern-card bg-dark text-white h-100 p-4 text-center">
                      <IconComponent className="text-primary mb-3" size={32} />
                      <h5 className="card-title mb-2">{option.name}</h5>
                      <p className="card-text text-muted small">
                        {option.description}
                      </p>
                      <div className="mt-auto">
                        <span className="btn btn-outline-light btn-sm">
                          Visit {option.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
