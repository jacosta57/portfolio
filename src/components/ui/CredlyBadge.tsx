import React, { JSX, useState, useRef, useEffect } from "react";
import styles from "./CredlyBadge.module.css";
import Link from "next/link";

interface CredlyBadgeProps {
  badgeId: string;
}

export default function CredlyBadge({
  badgeId,
}: CredlyBadgeProps): JSX.Element {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // Just check once after mount if content is already there
    const iframe = iframeRef.current;
    if (iframe && iframe.offsetHeight > 100) {
      setIsLoading(false);
    }
  }, []);

  return (
    <Link href={`https://www.credly.com/embedded_badge/${badgeId}`}>
      <div className={styles.credlyContainer}>
        {isLoading && (
          <div className="spinner-border text-primary" role="status" />
        )}
        <iframe
          ref={iframeRef}
          name="acclaim-badge"
          id={`embedded-badge-${badgeId}`}
          src={`https://www.credly.com/embedded_badge/${badgeId}`}
          className={styles.credlyIframe}
          style={isLoading ? { visibility: "hidden" } : {}}
        />
      </div>
    </Link>
  );
}
