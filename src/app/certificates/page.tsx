"use client";

import CertificateCard from "@/components/ui/CertificateCard";
import certificatesData from "@/data/certificates.json";

export default function CertificatesPage() {
  const certificates = Object.keys(certificatesData).map((key) => ({
    id: key,
    ...certificatesData[key as keyof typeof certificatesData],
  }));

  return (
    <div className="container mt-4">
      <h2 className="border-bottom border-primary pb-2 d-inline-block mb-5">
        Professional Certifications
      </h2>
      <div className="row g-4">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
