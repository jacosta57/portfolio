import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./layout.module.css";
import Navigation from "@/components/layout/Navigation";

export const metadata = {
  title: "Jayson Acosta - Portfolio",
  description: "Software Engineer Portfolio",
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [{ url: "/site.webmanifest", rel: "manifest" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <Navigation />
        <div className={styles.animatedbg}>
          <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
        </div>
        <main>{children}</main>
      </body>
    </html>
  );
}
