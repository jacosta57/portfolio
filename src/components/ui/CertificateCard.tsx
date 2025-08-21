import React from "react";
import ExportedImage from "next-image-export-optimizer";

interface Certificate {
  title: string;
  provider: string;
  issuer: string;
  badgeImage: string;
  verificationUrl: string;
  date: string;
  featured: string;
}

interface CertificateCardProps {
  certificate: Certificate;
}

export default function CertificateCard({ certificate }: CertificateCardProps) {
  const handleVerify = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(certificate.verificationUrl, "_blank", "noopener,noreferrer");
  };

  const handleViewBadge = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(certificate.verificationUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="col-md-4 mb-4">
        <div className="card h-100 border-0 bg-dark text-white modern-card">
          <div className="position-relative">
            <ExportedImage
              src={certificate.badgeImage}
              alt={certificate.title}
              className="card-img-top"
              width={300}
              height={300}
              style={{
                height: "200px",
                objectFit: "contain",
                backgroundColor: "white",
                padding: "1rem",
              }}
            />
          </div>
          <div className="card-body bg-dark text-white d-flex flex-column">
            <h5 className="card-title">{certificate.title}</h5>

            <div className="mb-3">
              <span className="modern-chip-interactive">
                {certificate.provider}
              </span>
              <span className="modern-chip-interactive">
                {certificate.date}
              </span>
            </div>

            <p className="card-text">{certificate.issuer}</p>

            <div className="mt-auto text-end">
              <button
                className="btn btn-sm btn-outline-light me-2"
                onClick={handleViewBadge}
              >
                View Badge
              </button>
              <button className="btn btn-sm btn-primary" onClick={handleVerify}>
                Verify
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
