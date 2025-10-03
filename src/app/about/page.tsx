"use client";

import Link from "next/link";
import {
  FaGraduationCap,
  FaCode,
  FaLightbulb,
  FaRocket,
  FaAward,
  FaHeart,
} from "react-icons/fa";

export default function AboutPage() {
  const interests = [
    "AI/ML Integration",
    "Cloud Architecture",
    "Full-Stack Development",
    "Team Leadership",
    "Open Source",
    "Problem Solving",
  ];

  const values = [
    {
      icon: FaCode,
      title: "Clean Code",
      description:
        "I believe in writing maintainable, well-documented code that others can understand and build upon.",
    },
    {
      icon: FaLightbulb,
      title: "Continuous Learning",
      description:
        "Technology evolves rapidly. I'm committed to staying current and always expanding my skill set.",
    },
    {
      icon: FaRocket,
      title: "Impact-Driven",
      description:
        "I want to build solutions that make a real difference, whether that's saving time, reducing costs, or improving user experience.",
    },
    {
      icon: FaHeart,
      title: "Collaboration",
      description:
        "Great software is built by great teams. I value mentorship, knowledge sharing, and collective growth.",
    },
  ];

  return (
    <div className="container mt-5">
      <div className="row mb-5">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4">About Me</h1>
          <p className="lead text-muted">
            Computer Engineer | Full-Stack Developer | Cloud Enthusiast
          </p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="modern-card bg-dark text-white p-5">
            <h2 className="border-bottom border-primary pb-2 mb-4">
              <FaGraduationCap className="me-2" />
              My Journey
            </h2>
            <p className="mb-3">
              I&apos;m Jayson Acosta, a Computer Engineering student at Iowa
              State University, graduating in May 2026. Originally from Staten
              Island, NY, I&apos;ve spent the last few years in Ames, IA, diving
              deep into the world of software engineering and discovering my
              passion for building scalable, impactful applications.
            </p>
            <p className="mb-3">
              My journey into tech started with curiosity about how things work
              under the hood. That curiosity led me to explore everything from
              low-level embedded systems to high-level cloud architectures. Now,
              I&apos;m focused on the intersection of AI/ML and cloud
              technologies, where I can combine cutting-edge innovation with
              practical, real-world solutions.
            </p>
            <p className="mb-0">
              During my time at Source Allies as a Software Engineer Apprentice
              and Delivery Lead, I learned that great engineering isn&apos;t
              just about writing code - it&apos;s about understanding problems,
              collaborating with teams, and delivering value. Whether I was
              automating workflows to save 6+ hours per week or reducing
              operational costs by 50%, every project taught me something new.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="modern-card bg-dark text-white p-5">
            <h2 className="border-bottom border-primary pb-2 mb-4">
              Career Vision
            </h2>
            <div className="row">
              <div className="col-md-6 mb-4">
                <h5 className="mb-3">What Drives Me</h5>
                <p>
                  I love solving complex problems that have tangible impact.
                  There&apos;s nothing quite like optimizing a system to run 50%
                  faster, or building an AI chatbot that helps developers
                  understand their codebases in minutes instead of hours. These
                  challenges push me to think creatively and learn constantly.
                </p>
              </div>
              <div className="col-md-6 mb-4">
                <h5 className="mb-3">Looking Ahead</h5>
                <p>
                  After graduation, I&apos;m looking to join a team where I can
                  contribute to meaningful projects while continuing to grow as
                  an engineer. My goal is to become a technical leader who not
                  only architects great solutions but also mentors others and
                  fosters innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <h2 className="border-bottom border-primary pb-2 mb-4 text-center">
            What I Value
          </h2>
          <div className="row g-4">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div className="col-md-6" key={index}>
                  <div className="modern-card bg-dark text-white p-4 h-100">
                    <div className="d-flex align-items-center mb-3">
                      <IconComponent className="text-primary me-3" size={32} />
                      <h5 className="mb-0">{value.title}</h5>
                    </div>
                    <p className="mb-0">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="modern-card bg-dark text-white p-4 h-100">
                <h4 className="border-bottom border-primary pb-2 mb-4">
                  Technical Interests
                </h4>
                <div className="d-flex flex-wrap">
                  {interests.map((interest, index) => (
                    <span key={index} className="modern-chip me-2 mb-2">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="modern-card bg-dark text-white p-4 h-100">
                <h4 className="border-bottom border-primary pb-2 mb-4">
                  <FaAward className="me-2" />
                  Certifications
                </h4>
                <div className="mb-3">
                  <h6 className="text-primary mb-1">
                    AWS Certified Developer - Associate
                  </h6>
                  <p className="text-muted small mb-0">
                    Amazon Web Services | 2025
                  </p>
                </div>
                <Link
                  href="/certificates"
                  className="btn btn-outline-light btn-sm"
                >
                  View All Certificates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto">
          <div className="modern-card bg-dark text-white p-5">
            <h2 className="border-bottom border-primary pb-2 mb-4">
              Beyond the Code
            </h2>
            <p className="mb-3">
              When I&apos;m not coding, you&apos;ll find me giving back to the
              community. I&apos;ve organized hackathons at Source Allies,
              managed finances as Treasurer for Wallace Hall, and volunteered
              with Students Helping Rescue Animals to make a difference beyond
              tech.
            </p>
            <p className="mb-0">
              I&apos;m also passionate about languages - I speak Spanish at an
              intermediate level and am learning American Sign Language. I
              believe that diverse perspectives and cross-cultural communication
              make us better engineers and better people.
            </p>
          </div>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-lg-10 mx-auto text-center">
          <div className="modern-card bg-dark text-white p-5">
            <h3 className="mb-4">Let&apos;s Connect</h3>
            <p className="text-muted mb-4">
              I&apos;m always open to discussing new opportunities,
              collaborations, or just chatting about tech!
            </p>
            <div className="d-flex flex-wrap justify-content-center gap-3">
              <Link href="/projects" className="btn btn-primary">
                View My Projects
              </Link>
              <Link href="/experience" className="btn btn-outline-light">
                See My Experience
              </Link>
              <Link href="/resume" className="btn btn-outline-light">
                View Résumés
              </Link>
              <a
                href="mailto:contact@jaysonacosta.com"
                className="btn btn-outline-light"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
