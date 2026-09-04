import localFont from "next/font/local";
import styles from "../styles/Contact.module.css";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

export default function Custom404() {
  return (
    <main
      className={`${baksoSapi.className} ${styles.page} ${styles.notFoundPage}`}
    >
      <section className={`${styles.main} ${styles.notFound}`}>
        <h1 className={styles.notFoundCode}>404</h1>
        <p className={styles.intro}>Page not found.</p>
        <a className={`${baksoSapi.className} ${styles.homeLink}`} href="/">
          Back to home
        </a>
      </section>
    </main>
  );
}
