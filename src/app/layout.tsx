import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./layout.module.css";
import Navigation from "@/components/layout/Navigation";

export const metadata = {
  title: "Jayson Acosta - Portfolio",
  description: "Software Engineer Portfolio",
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
