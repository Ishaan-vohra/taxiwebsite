import Link from "next/link";
import styles from "../styles/Home.module.css";

const menuItems = [
  { href: "/rush", label: "Rush" },
  { href: "/brothers", label: "Brothers" },
  { href: "/alumni", label: "Alumni" },
  { href: "/summer", label: "Summer Housing" },
  { href: "/contact", label: "Contact" },
];

export default function Home() {
  return (
    <main className={styles.home}>
      <video className={styles.backgroundVideo} autoPlay muted loop playsInline>
        <source src="./house.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} />

      <header className={styles.topbar}>
        <nav className={styles.topnav} aria-label="Primary">
          {menuItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <span className={styles.topnavLink}>{item.label}</span>
            </Link>
          ))}
        </nav>
      </header>

      <section className={styles.hero}>
        <img className={styles.crest} src="/images/crest-bw.png" alt="" />
        <p className={styles.kicker}>MIT Delta Chapter</p>
        <h1>Theta Xi</h1>
        <p className={styles.address}>64 Bay State Road, Boston, MA</p>

        <div className={styles.actions}>
          <Link href="/rush">
            <span className={styles.rushLink}>Rush TAXI</span>
          </Link>
          <Link href="/brothers">
            <span className={styles.secondaryLink}>Meet the Brothers</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
