import React, { JSX, useState } from "react";
import styles from "./CredlyBadge.module.css";
import Link from "next/link";

interface CredlyBadgeProps {
  badgeId: string;
}

export default function CredlyBadge({
  badgeId,
}: CredlyBadgeProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    console.log("Loading Finished");
    setIsLoading(false);
  };

  return (
    <Link href={`https://www.credly.com/embedded_badge/${badgeId}`}>
      <div className={styles.credlyContainer}>
        {isLoading && (
          <div className="spinner-border text-primary" role="status" />
        )}
        <iframe
          name="acclaim-badge"
          id={`embedded-badge-${badgeId}`}
          src={`https://www.credly.com/embedded_badge/${badgeId}`}
          className={styles.credlyIframe}
          style={{ display: isLoading ? "none" : "block" }}
          onLoad={handleLoad}
        />
      </div>
    </Link>
  );
}
