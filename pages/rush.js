import localFont from "next/font/local";
import SiteHeader from "../components/SiteHeader";
import styles from "../styles/Rush.module.css";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

const houseAddress = "64 Bay State Road, Boston MA";
const pickupNumbers = "+1 (631) 980-8880 / +1 (617) 251-2582";

const rushDays = [
  {
    date: "saturday 9/5",
    events: [
      { time: "15:00", name: "kbbq" },
      { time: "18:00", name: "ping pong + poker / house tours" },
      { time: "21:00", name: "karaoke party + late night boba" },
    ],
  },
  {
    date: "sunday 9/6",
    events: [
      { time: "14:00", name: "rock climbing", away: true },
      { time: "17:00", name: "board games / social deduction games" },
      { time: "20:00", name: "outhouse steakback & legal riverfoods" },
    ],
  },
  {
    date: "monday 9/7",
    events: [
      { time: "13:00", name: "NERF BATTLE!!!", note: "hockfield court" },
      { time: "17:00", name: "hotpot hotpot hotpot" },
      { time: "20:00", name: "B.A.S.H.", note: "boston area scavenger hunt" },
    ],
  },
  {
    date: "tuesday 9/8",
    events: [
      {
        time: "17:00",
        name: "escape rooms",
        inviteOnly: true,
        away: true,
      },
      { time: "20:00", name: "ayce sushi @ yamatos", inviteOnly: true },
      { time: "23:00", name: "unicorn tours", inviteOnly: true },
    ],
  },
  {
    date: "wednesday 9/9 (FDOC)",
    events: [
      {
        time: "18:00",
        name: "archery dodgeball",
        away: true,
      },
      { time: "21:00", name: "late night pancakes @ IHOP", away: true },
      { time: "23:00", name: "unicorn tours", inviteOnly: true },
    ],
  },
  {
    date: "thursday 9/10",
    events: [
      {
        time: "17:00",
        name: "arcade games @ BodaBorg",
        inviteOnly: true,
        away: true,
      },
    ],
  },
  {
    date: "friday 9/11",
    events: [{ time: "18:00", name: "bid dinner", inviteOnly: true }],
  },
];

function RushEvent({ event }) {
  return (
    <li className={styles.event}>
      <span className={styles.time}>{event.time}</span>
      <span className={styles.eventText}>
        <span className={event.name.includes("NERF") ? styles.emphasis : ""}>
          {event.name}
        </span>
        {event.inviteOnly && <span className={styles.star}>*</span>}
        {event.note && <span className={styles.note}> ({event.note})</span>}
        {event.away && <span className={styles.tag}>off-site</span>}
      </span>
    </li>
  );
}

function RushDay({ day }) {
  return (
    <section className={styles.day}>
      <h2>{day.date}</h2>
      <ul>
        {day.events.map((event) => (
          <RushEvent
            key={`${day.date}-${event.time}-${event.name}`}
            event={event}
          />
        ))}
      </ul>
    </section>
  );
}

export default function Rush() {
  return (
    <main className={`${baksoSapi.className} ${styles.page}`}>
      <SiteHeader dark />

      <article className={styles.flyer}>
        <div className={styles.cornerTopLeft} />
        <div className={styles.cornerTopRight} />
        <div className={styles.cornerBottomLeft} />
        <div className={styles.cornerBottomRight} />

        <header className={styles.header}>
          <div>
            <span className={styles.kicker}>64 Bay State Road</span>
            <h1>Theta Xi Fall Rush 2026 Schedule</h1>
          </div>
          <div className={styles.letters} aria-hidden="true">
            {"\u0398\u039E"}
          </div>
        </header>

        <p className={styles.meta}>
          <span className={styles.metaItem}>all MIT students welcome!</span>
          <span
            className={`${styles.metaDivider} ${styles.desktopDivider}`}
            aria-hidden="true"
          />
          <span className={styles.metaItem}>
            <span
              className={`${styles.metaDivider} ${styles.wrapDivider}`}
              aria-hidden="true"
            />
            unless specified, all events @ house
            <span
              className={`${styles.metaDivider} ${styles.wrapDivider}`}
              aria-hidden="true"
            />
          </span>
        </p>

        <div className={styles.watermark} aria-hidden="true">
          {"\u0398\u039E"}
        </div>

        <div className={styles.schedule}>
          {rushDays.map((day) => (
            <RushDay key={day.date} day={day} />
          ))}
        </div>

        <aside className={styles.legend}>
          <p>
            <strong>* invite only</strong>
          </p>
          <p>you can ask us to pick you up!!!</p>
        </aside>

        <footer className={styles.footer}>
          <p>
            <strong>House Address:</strong> {houseAddress}
          </p>
          <p>For pickups, DM us @thetaximit or call/text {pickupNumbers}</p>
        </footer>
      </article>
    </main>
  );
}
