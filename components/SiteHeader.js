import Link from "next/link";
import localFont from "next/font/local";
import styles from "../styles/SiteHeader.module.css";

const baksoSapi = localFont({ src: "../pages/BaksoSapi.otf" });

const links = [
  { href: "/rush", label: "Rush" },
  { href: "/brothers", label: "Brothers" },
  { href: "/alumni", label: "Alumni" },
  { href: "/summer", label: "Summer Housing" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader({ dark = false, simple = false }) {
  return (
    <header
      className={`${styles.header} ${simple ? styles.simple : ""} ${
        simple ? baksoSapi.className : ""
      } ${dark ? styles.dark : ""}`}
    >
      <Link href="/" className={styles.brand} aria-label="Theta Xi MIT home">
        {!simple && <img src="/images/crest-bw.png" alt="" />}
        <span className={simple ? baksoSapi.className : ""}>
          {simple ? "BACK TO HOME" : "Theta Xi MIT"}
        </span>
      </Link>

      {!simple && (
        <nav className={styles.nav} aria-label="Primary">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
