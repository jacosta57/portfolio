"use client";
import Link from "next/link";
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaLightbulb,
  FaUsers,
  FaChartLine,
  FaTools,
} from "react-icons/fa";

export default function ExperiencePage() {
  const technicalSkills = [
    "AWS Lambda & RDS",
    "GraphQL Architecture",
    "Database Migration",
    "Infrastructure Automation",
    "Testing Frameworks",
    "GSuite API Integration",
    "Cost Optimization",
    "System Design",
  ];

  const softSkills = [
    "Team Leadership",
    "Client Communication",
    "Agile Delivery",
    "Problem Solving",
    "Project Management",
    "Knowledge Transfer",
    "Time Management",
    "Stakeholder Management",
  ];

  const projects = [
    {
      title: "WiFi Voucher Automation",
      description:
        "Automated WiFi voucher generation using AWS Lambda, eliminating manual IT work and improving efficiency.",
      impact: "Saved 6+ hours per week of manual work",
      technologies: ["AWS Lambda", "Python", "Automation"],
    },
    {
      title: "GraphQL Migration",
      description:
        "Migrated case studies to GraphQL architecture with AWS Lambda subgraph for unified metadata access.",
      impact: "Improved data accessibility and API performance",
      technologies: ["GraphQL", "AWS Lambda", "Node.js"],
    },
    {
      title: "Internal Application Redesign",
      description:
        "Redesigned internal application by migrating to GraphQL queries and implementing comprehensive testing frameworks.",
      impact: "Enhanced code quality and maintainability",
      technologies: ["GraphQL", "Testing Frameworks", "React"],
    },
    {
      title: "Database Infrastructure Optimization",
      description:
        "Upgraded and decommissioned AWS RDS databases, implementing cost-effective solutions.",
      impact: "Reduced monthly operational costs by 50%",
      technologies: ["AWS RDS", "Database Migration", "Infrastructure"],
    },
    {
      title: "Employee Onboarding Automation",
      description:
        "Streamlined account provisioning with GSuite integration for new employee setup.",
      impact: "Reduced onboarding time by 3 hours per employee",
      technologies: ["GSuite API", "Automation", "Integration"],
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <h1 className="border-bottom border-primary pb-2 mb-5">
            Work Experience
          </h1>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="modern-card bg-dark text-white p-5">
            <div className="d-flex flex-wrap justify-content-between align-items-start mb-4">
              <div>
                <h2 className="mb-2">
                  Software Engineer Apprentice & Delivery Lead
                </h2>
                <h4 className="text-primary mb-3">Source Allies</h4>
              </div>
              <div className="text-end">
                <div className="mb-2">
                  <FaCalendarAlt className="me-2" />
                  <span>May 2025 - August 2025</span>
                </div>
                <div>
                  <FaMapMarkerAlt className="me-2" />
                  <span>Urbandale, IA</span>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="border-bottom border-secondary pb-2 mb-3">
                Overview
              </h5>
              <p>
                As a Software Engineer Apprentice and Delivery Lead at Source
                Allies, I worked on multiple high-impact projects involving
                cloud infrastructure, automation, and full-stack development. I
                collaborated with cross-functional teams to deliver solutions
                that improved efficiency, reduced costs, and enhanced system
                reliability.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <h3 className="border-bottom border-primary pb-2 mb-4">
            <FaBriefcase className="me-2" />
            Key Projects & Duties
          </h3>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div className="col-md-6" key={index}>
                <div className="modern-card bg-dark text-white p-4 h-100">
                  <h5 className="text-primary mb-3">{project.title}</h5>
                  <p className="mb-3">{project.description}</p>
                  <div className="mb-3">
                    <strong className="text-success">Impact:</strong>
                    <p className="mb-0">{project.impact}</p>
                  </div>
                  <div>
                    <strong>Technologies:</strong>
                    <div className="d-flex flex-wrap mt-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="modern-chip me-2 mb-2">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="modern-card bg-dark text-white p-4 h-100">
                <h4 className="border-bottom border-primary pb-2 mb-4">
                  <FaTools className="me-2" />
                  Technical Skills Gained
                </h4>
                <ul className="list-unstyled">
                  {technicalSkills.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <span className="text-primary me-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modern-card bg-dark text-white p-4 h-100">
                <h4 className="border-bottom border-primary pb-2 mb-4">
                  <FaUsers className="me-2" />
                  Soft Skills Developed
                </h4>
                <ul className="list-unstyled">
                  {softSkills.map((skill, index) => (
                    <li key={index} className="mb-2">
                      <span className="text-success me-2">▹</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="modern-card bg-dark text-white p-5">
            <h3 className="border-bottom border-primary pb-2 mb-4">
              <FaChartLine className="me-2" />
              Overall Impact & Achievements
            </h3>
            <div className="row text-center">
              <div className="col-md-4 mb-3">
                <div className="p-3">
                  <h2 className="text-primary mb-2">50%</h2>
                  <p className="mb-0">Cost Reduction</p>
                  <small>Through database optimization</small>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3">
                  <h2 className="text-success mb-2">6+ hrs</h2>
                  <p className="mb-0">Time Saved Weekly</p>
                  <small>Via workflow automation</small>
                </div>
              </div>
              <div className="col-md-4 mb-3">
                <div className="p-3">
                  <h2 className="text-info mb-2">3 hrs</h2>
                  <p className="mb-0">Faster Onboarding</p>
                  <small>Per new employee</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="modern-card bg-dark text-white p-5">
            <h3 className="border-bottom border-primary pb-2 mb-4">
              <FaLightbulb className="me-2" />
              Key Learnings & Takeaways
            </h3>
            <div className="row">
              <div className="col-md-6 mb-3">
                <h5 className="text-primary mb-2">Technical Growth</h5>
                <p>
                  I deepened my understanding of cloud infrastructure,
                  particularly AWS services like Lambda and RDS. Working with
                  GraphQL architecture taught me the importance of API design
                  and how to build scalable, maintainable systems. The database
                  migration project gave me hands-on experience with cost
                  optimization and infrastructure planning.
                </p>
              </div>
              <div className="col-md-6 mb-3">
                <h5 className="text-success mb-2">Leadership & Delivery</h5>
                <p>
                  As a Delivery Lead, I learned to balance technical work with
                  team coordination and client communication. I discovered the
                  importance of breaking down complex problems, setting clear
                  priorities, and ensuring everyone on the team understands the
                  bigger picture. These experiences shaped how I approach
                  software development holistically.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto text-center">
          <div className="modern-card bg-dark text-white p-5">
            <h3 className="mb-4">Want to Learn More?</h3>
            <p className="mb-4">
              Check out my projects to see these skills in action, or view my
              resume for the complete picture.
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/projects" className="btn btn-primary">
                View Projects
              </Link>
              <Link href="/resume" className="btn btn-outline-light">
                View Résumés
              </Link>
              <Link href="/about" className="btn btn-outline-light">
                About Me
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
