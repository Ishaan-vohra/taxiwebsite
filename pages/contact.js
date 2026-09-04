import SiteHeader from "../components/SiteHeader";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <main className={styles.page}>
      <SiteHeader simple />
      <section className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.intro}>
          For rush, visits, housing, and chapter questions, reach out to the
          officer group that fits best.
        </p>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h2>President</h2>
            <p>Victor Yin</p>
            <p className={styles.email}>txi-president [at] mit.edu</p>
          </article>

          <article className={styles.card}>
            <h2>Secretary</h2>
            <p>Juan Pablo Amezcua Gonzalez</p>
            <p className={styles.email}>txi-secretary [at] mit.edu</p>
          </article>

          <article className={styles.card}>
            <h2>Social</h2>
            <p>Ryan Chin</p>
            <p className={styles.email}>txi-social [at] mit.edu</p>
          </article>

          <article className={styles.card}>
            <h2>Officers</h2>
            <p>General chapter questions</p>
            <p className={styles.email}>txi-officers [at] mit.edu</p>
          </article>

          <article className={styles.card}>
            <h2>Webmaster</h2>
            <p className={styles.email}>txi-web [at] mit.edu</p>
          </article>
        </div>
      </section>
    </main>
  );
}
