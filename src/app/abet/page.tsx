"use client";
import { useState } from "react";
import { FaDownload, FaEye, FaGraduationCap } from "react-icons/fa";
import abetJSON from "@/data/abet.json";

interface ABETDocument {
  id: string;
  title: string;
  description: string;
  fileName: string;
  category: string;
  highlights: string[];
}

export default function ABETPage() {
  const [selectedDocument, setSelectedDocument] = useState<ABETDocument | null>(
    null,
  );

  const documents = Object.keys(abetJSON).map((key) => ({
    id: key,
    ...abetJSON[key as keyof typeof abetJSON],
  }));

  const openModal = (document: ABETDocument) => {
    setSelectedDocument(document);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedDocument(null);
    document.body.style.overflow = "unset";
  };

  const downloadDocument = (fileName: string) => {
    const link = document.createElement("a");
    link.href = `/abet/${fileName}`;
    link.download = fileName;
    link.click();
  };

  return (
    <div className="container mt-5">
      <div className="mb-4">
        <h2 className="border-bottom border-primary pb-2 d-inline-block">
          <FaGraduationCap className="me-2" />
          ABET Requirements
        </h2>
        <p className="text-muted mt-3">
          Academic reflections and ethics coursework as required by ABET
          accreditation standards.
        </p>
      </div>

      <div className="row g-4">
        {documents.map((document) => (
          <div className="col-md-6 col-lg-4 mb-4" key={document.id}>
            <div className="card h-100 border-0 bg-dark text-white modern-card">
              <div className="card-body">
                <h5 className="card-title text-primary">{document.title}</h5>
                <p className="card-text">{document.description}</p>

                <div className="mb-3">
                  <span className="modern-chip">{document.category}</span>
                </div>

                <div className="mb-3">
                  <small className="d-block mb-2">Key Topics:</small>
                  <ul className="list-unstyled small">
                    {document.highlights.slice(0, 3).map((highlight, index) => (
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
                    onClick={() => openModal(document)}
                  >
                    <FaEye className="me-2" />
                    Preview
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => downloadDocument(document.fileName)}
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

      {selectedDocument && (
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
                <h5 className="modal-title">{selectedDocument.title}</h5>
                <div className="d-flex align-items-center">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => downloadDocument(selectedDocument.fileName)}
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
                  src={`/abet/${selectedDocument.fileName}`}
                  width="100%"
                  height="600px"
                  style={{ border: "none" }}
                  title={`${selectedDocument.title}`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
