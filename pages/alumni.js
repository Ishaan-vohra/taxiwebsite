import Link from "next/link";
import localFont from "next/font/local";
import SiteHeader from "../components/SiteHeader";
import styles from "../styles/Brother.module.css";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

const alumni = [
  {
    name: "Chris Zhang",
    delta: "1255",
    class: "2025",
    course: "6-3",
  },
  {
    name: "Jorge Ramos",
    delta: "1254",
    class: "2025",
    course: "2, 8",
  },
  {
    name: "Andy Fong",
    delta: "1256",
    class: "2025",
    course: "10/12",
  },
  {
    name: "Curtis Chang",
    delta: "1260",
    class: "2025",
    course: "18, 6-14",
  },
  {
    name: "Siyong Huang",
    delta: "1264",
    class: "2025",
    course: "6-3",
  },
  {
    name: "Thomas Guo",
    delta: "1267",
    class: "2025",
    course: "6-3, 18",
  },
  {
    name: "Jacob Teo",
    delta: "1270",
    class: "2025",
    course: "6-3",
  },
  {
    name: "Darren Yao",
    delta: "1277",
    class: "2025",
    course: "6, 18",
  },
  {
    name: "Larry Shi",
    delta: "1279",
    class: "2025",
    course: "6-2, 8",
  },
  {
    name: "Powell Zhang",
    delta: "1282",
    class: "2026",
    course: "6-3 + 15-1",
  },
  {
    name: "Alex Gu",
    delta: "1284",
    class: "2026",
    course: "8, 18",
  },
  {
    name: "Elliot Liu",
    delta: "1285",
    class: "2026",
    course: "6-3",
  },
  {
    name: "Franklin Wang",
    delta: "1287",
    class: "2026",
    course: "6-4",
  },
  {
    name: "Daniel Xu",
    delta: "1288",
    class: "2026",
    course: "6-14/18",
  },
  {
    name: "Nathan Wang",
    delta: "1289",
    class: "2026",
    course: "6-3",
  },
  {
    name: "Kingston Lew",
    delta: "1291",
    class: "2026",
    course: "6-14, 15-2",
  },
  {
    name: "Sinjin Cho-Tupua",
    delta: "1296",
    class: "2027",
    course: "6-3, 18",
  },
  {
    name: "Ryan Yang",
    delta: "1305",
    class: "2027",
    course: "Physics",
  },
  {
    name: "Ishank Agrawal",
    delta: "1306",
    class: "2026",
  },
  {
    name: "Achyuta Rajaram",
    delta: "1314",
    class: "2028",
  },
];

export default function Alumni() {
  return (
    <main
      className={`${styles.videoContainer} ${styles.BrothersPage} ${styles.AlumniPage}`}
    >
      <SiteHeader simple />

      <div className={styles.BrotherTitle}>Alumni</div>
      <div className={styles.BrotherPageLinks}>
        <Link href="/brothers">
          <span className={baksoSapi.className}>Active Chapter</span>
        </Link>
      </div>

      <section className={styles.AlumniGrid}>
        {alumni.map((brother) => (
          <article key={brother.delta} className={styles.AlumniCard}>
            <img src={`/images/${brother.delta}.jpg`} alt={brother.name} />
            <div>
              <h2>{brother.name}</h2>
              <p>Δ{brother.delta}</p>
              <p>Class of {brother.class}</p>
              {brother.course && <p>Course {brother.course}</p>}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
