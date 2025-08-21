"use client";
import ProjectCard from "@/components/ui/ProjectCard";
import Terminal from "@/components/ui/Terminal";
import Link from "next/link";
import projects from "@/data/projects.json";
import { FaChevronDown } from "react-icons/fa";
import CertificateCard from "@/components/ui/CertificateCard";
import certificatesData from "@/data/certificates.json";

export default function HomePage() {
  const featuredCertificates = Object.keys(certificatesData)
    .map((key) => ({
      id: key,
      ...certificatesData[key as keyof typeof certificatesData],
    }))
    .filter((cert) => cert.featured === "true");

  return (
    <>
      <section className="position-relative min-vh-100 d-flex align-items-center">
        <div className="container">
          <Terminal />
        </div>

        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center">
          <p className="mb-1">Scroll Down</p>
          <FaChevronDown
            style={{ animation: "bounce 2s infinite" }}
            className="mt-4"
          />
        </div>
      </section>
      <section id="certificates" className="py-5">
        <div className="container">
          <h2 className="mb-5 border-bottom border-primary pb-2 d-inline-block">
            Featured Certificates
          </h2>
          <div className="row g-4">
            {featuredCertificates.map((certificate) => (
              <CertificateCard key={certificate.id} certificate={certificate} />
            ))}
          </div>
          <div className="text-center mt-4">
            <Link href="/certificates" className="btn btn-outline-light">
              See All Certificates
            </Link>
          </div>
        </div>
      </section>

      <section id="projects" className="py-5">
        <div className="container">
          <h2 className="mb-5 border-bottom border-primary pb-2 d-inline-block">
            Featured Projects
          </h2>
          <div className="row g-4">
            <ProjectCard project={projects["CoveyBot"]} />
            <ProjectCard project={projects["Konnect"]} />
            <ProjectCard project={projects["FinAntes"]} />
          </div>
          <div className="text-center mt-4">
            <Link href="/projects" className="btn btn-outline-light">
              See All Projects
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
