"use client";

import { useState } from "react";
import { FaDownload, FaEye } from "react-icons/fa";
import resumesJSON from "@/data/resumes.json";

interface Resume {
  id: string;
  title: string;
  description: string;
  fileName: string;
  technologies: string[];
  highlights: string[];
}

export default function ResumePage() {
  const [selectedResume, setSelectedResume] = useState<Resume | null>(null);

  const resumes = Object.keys(resumesJSON).map((key) => ({
    id: key,
    ...resumesJSON[key as keyof typeof resumesJSON],
  }));

  const openModal = (resume: Resume) => {
    setSelectedResume(resume);
    document.body.style.overflow = "hidden"; // Prevent background scroll
  };

  const closeModal = () => {
    setSelectedResume(null);
    document.body.style.overflow = "unset";
  };

  const downloadResume = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/resumes/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h2 className="border-bottom border-primary pb-2 d-inline-block">
          Résumés - Tailored for Different Roles
        </h2>
      </div>

      <div className="row g-4">
        {resumes.map((resume) => (
          <div className="col-md-6 col-lg-6 mb-4" key={resume.id}>
            <div className="card h-100 border-0 bg-dark text-white modern-card">
              <div className="card-body">
                <h5 className="card-title text-primary">{resume.title}</h5>
                <p className="card-text">{resume.description}</p>

                <div className="mb-3">
                  {resume.technologies.slice(0, 4).map((tech, index) => (
                    <span
                      className="me-2 mb-2 px-3 py-1 d-inline-flex align-items-center modern-chip"
                      key={index}
                    >
                      {tech}
                    </span>
                  ))}
                  {resume.technologies.length > 4 && (
                    <span className="me-2 mb-2 px-3 py-1 d-inline-flex align-items-center modern-chip">
                      +{resume.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mb-3">
                  <small className="d-block mb-2">Key Highlights:</small>
                  <ul className="list-unstyled small">
                    {resume.highlights.slice(0, 3).map((highlight, index) => (
                      <li key={index} className="mb-1">
                        <span className="text-primary me-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <button
                    className="btn btn-outline-light"
                    onClick={() => openModal(resume)}
                  >
                    <FaEye className="me-2" />
                    Preview
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadResume(resume.fileName)}
                  >
                    <FaDownload className="me-2" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedResume && (
        <div
          className="modal show d-block"
          tabIndex={-1}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          onClick={closeModal}
        >
          <div
            className="modal-dialog modal-xl modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white">
              <div className="modal-header border-secondary d-flex justify-content-between">
                <h5 className="modal-title">{selectedResume.title}</h5>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => downloadResume(selectedResume.fileName)}
                  >
                    <FaDownload className="me-2" />
                    Download PDF
                  </button>
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    onClick={closeModal}
                    aria-label="Close"
                  />
                </div>
              </div>

              <div className="modal-body p-0">
                <iframe
                  src={`/resumes/${selectedResume.fileName}`}
                  width="100%"
                  height="600px"
                  style={{ border: "none" }}
                  title={`${selectedResume.title} Resume`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
