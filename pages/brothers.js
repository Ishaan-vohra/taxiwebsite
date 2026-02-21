import { useState, useRef, useEffect } from "react";
import Typed from "typed.js";
import Link from "next/link";
import ProfilePhoto from "../components/ProfilePhoto";
import BrotherModal from "../components/BrotherModal";
import styles from "../styles/Brother.module.css";

import localFont from "next/font/local";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

const brothers = [
  {
    name: "Andy Fong",
    delta: "1256",
    class: "2025",
    course: "10/12",
    interests: "Going to graduate school.",
  },
  {
    name: "Juan Amezcua Gonzalez",
    delta: "1313",
    class: "2028",
    course: "6-3",
    interests: "Soccer, biking, movies and reading",
    blurb: "My mental health depends on 11 players",
  },
  {
    name: "Powell Zhang",
    delta: "1282",
    class: "2026",
    course: "6-3 + 15-1",
    interests: "Violin, Piano, Total War, Osu, Organizing things",
    blurb: "I like pigs. Cats look down on us, dogs look up at us. Pigs, pigs treat us as equal... and I like bacon",
    position: "President",
  },
  {
    name: "Zhi Zheng Ong",
    delta: "1309",
    class: "2028",
    course: "8, 6-4",
    interests: "stargazing, piano/guitar, doomscrolling/youtube",
    blurb: "i put the zz in rizz",
    position: "Social Media / Lord of Kerns",
  },
  {
    name: "Darren Yao",
    delta: "1277",
    class: "2025",
    course: "6, 18",
    interests: "travel, photography, rock climbing, piano",
    blurb: "eternal rush chair",
  },
  {
    name: "Victor Yin",
    delta: "1297",
    class: "2027",
    course: "18",
    interests: "Reading, bouldering, chess, puzzle games",
    blurb: "WUBALUBADUBDUB",
    position: "Vice President, Rush Chair",
  },
  
  {
    name: "Larry Shi",
    delta: "1279",
    class: "2025",
    course: "6-2. 8",
    interests: "DJ mixing, clarinet, poker",
  },
  {
    name: "Tony",
    delta: "1303",
    class: "2027",
    course: "18",
    interests: "Learning cool maths, swimming, cooking",
    blurb: "Rush Theta Xi!",
    position: "Memed, summer housing chair",
  },
  {
    name: "Michael Huang",
    delta: "1299",
    class: "2027",
    course: "8",
    interests: "Reading and writing fictions, playing video or board games, and watching shows",
    blurb: "Hey!👋",
    position: "Repair Manager, Rush Chair",
  },
  {
    name: "Thomas Liu",
    delta: "1310",
    class: "2028",
    course: "6-4, 9",
    interests: "Poker, Coding, Skipping Lecture",
  },
  {
    name: "Curtis Chang",
    delta: "1260",
    class: "2025",
    course: "18, 6-14",
    interests: "Singing, Cooking/Baking, Piano, Origami, Hanging Out",
    blurb: "i like to drink too much white wine and overshare",
  },
  {
    name: "Kingston Lew",
    delta: "1291",
    class: "2026",
    course: "6-14, 15-2",
    interests: "hip-hop dance, traveling, street fashion",
    blurb: "🌞",
    position: "Social Chair",
  },
  {
    name: "Marin Hristov Hristov",
    delta: "1308",
    class: "2028",
    course: "18, 6-3",
    interests: "Chess, Puzzles, Table Tennis, Fussball, Poker",
    blurb: "If you show me a bad LaTeX project I won't leave you alone until I've cleaned it up",
  },
  {
    name: "Franklin",
    delta: "1287",
    class: "2026",
    course: "6-4",
    interests: "Synthesizers, Badminton, Skiing",
    blurb: "maximizing silliness",
    position: "social chair",
  },
  {
    name: "Ryan Yang",
    delta: "1305",
    class: "2027",
    course: "Physics",
    interests: "Debate, Cooking, Singing, Forecasting.",
    blurb: "Robert'); DROP TABLE STUDENTS; --",
    position: "Social Chair",
  },
  {
    name: "Sinjin Cho-Tupua",
    delta: "1296",
    class: "2027",
    course: "6-3, 18",
    interests: "league of legends, playing viola, psets",
    blurb: "this page needs a herooooo",
  },
  {
    name: "Larry Shi",
    delta: "1279",
    class: "2025",
    course: "6-2. 8",
    interests: "DJ mixing, clarinet, poker",
  },
{
    name: "Jacob Teo",
    delta: "1270",
    class: "2025",
    course: "6-3",
    interests: "pool, food, F1, baking",
    blurb: "plays way too much pool",
  },,
{
    name: "Thomas Guo",
    delta: "1267",
    class: "2025",
    course: "6-3, 18",
    interests: "Hockey, Poker, Chess, Politics, League + Valorant",
    blurb: "yasuo main",
  },,
{
    name: "Siyong Huang",
    delta: "1264",
    class: "2025",
    course: "6-3",
    interests: "Card games, fountain pens, baking",
    blurb: "cleans his room",
  },,
  {
    name: "Curtis Chang",
    delta: "1260",
    class: "2025",
    course: "18, 6-14",
    interests: "Singing, Cooking/Baking, Piano, Origami, Hanging Out",
    blurb: "i like to drink too much white wine and overshare",
  },
{
    name: "Chris Zhang",
    delta: "1255",
    class: "2025",
    course: "6-3",
    interests: "dance, watching k/c-dramas, programming, sports, music",
    blurb: "",
  },,
  {
    name: "Jorge Ramos",
    delta: "1254",
    class: "2025",
    course: "2,8",
    interests: "Video Games, reading fiction, collecting shoes",
    blurb: "Hell nah",
  },
{
    name: "Elliot Liu",
    delta: "1285",
    class: "2026",
    course: "6-3",
    interests: "Exploring weird places, reading blogs, guitaring, and cp ;)",
    blurb: ":)",
  },,
{
    name: "Daniel Xu",
    delta: "1288",
    class: "2026",
    course: "6-14/18",
    interests: "Philosophy, skipping leg day, Gilbert Strang",
    blurb: "",
  },
{
    name: "Alex Gu",
    delta: "1284",
    class: "2026",
    course: "8, 18",
    interests: "Physic, Board Games, Piano, Climbing",
  },
  {
    name: "Nathan Wang",
    delta: "1289",
    class: "2026",
    course: "6-3",
    interests: "board games, bridge, politics, secret hitler, avalon, taxes",
    blurb: "",
  },
  {
    name: "Sinjin Cho-Tupua",
    delta: "1296",
    class: "2027",
    course: "6-3, 18",
    interests: "league of legends, playing viola, psets",
    blurb: "this page needs a herooooo",
  },
{
    name: "Allen Ho",
    delta: "1298",
    class: "2027",
    course: "6-4",
    interests: "Startups, exploiting MIT, sleep",
    blurb: "King Cruft",
  },
]
  .sort((a, b) => (a.delta > b.delta ? 1 : -1))
  .sort((a, b) => (a.position && !b.position ? -1 : 1))
  .sort((a, b) => (a.priority > b.priority ? -1 : 1));

function Brothers(props) {
  const scollToRef = useRef();
  const [brother, setBrother] = useState({});
  const [glowDelta, setGlowDelta] = useState(null);

  const title = useRef(null);
  const typedTitle = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`BROTHERS`],
      typeSpeed: 80,
      backSpeed: 50,
      loop: false,
      showCursor: true,
    };

    typedTitle.current = new Typed(title.current, optionsTitle);
    return () => {
      typedTitle.current.destroy();
    };
  }, []);

  function showModal() {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#brotherModal");
    myModal.show();
  }

  function renderBrotherImages() {
    // transform to a BrotherImage component
    let renderedBrothers = brothers.map((brother, index) => {
      return (
        <ProfilePhoto
          onMouseOver={() => {
            setGlowDelta(brother.delta);
            scollToRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
          onMouseOut={() => setGlowDelta(null)}
          name={brother.name}
          position={brother.position}
          contact={brother.contact}
          src={"/images/" + brother.delta + ".jpg"}
          onClick={() => {
            setBrother({ ...brother });
            showModal();
          }}
          hasGlow={brother.delta === glowDelta}
        />
      );
    });
    return renderedBrothers;
  }

  function renderBrotherNames() {
    // transform to a BrotherName component
    let renderedBrotherNames = brothers.map((brother, index) => {
      return (
        <div
          className={
            glowDelta === brother.delta
              ? styles.BrotherNameGlow
              : styles.BrotherName
          }
          ref={glowDelta === brother.delta ? scollToRef : null}
          onClick={() => {
            setBrother({ ...brother });
            showModal();
          }}
          onMouseOver={() => setGlowDelta(brother.delta)}
          onMouseOut={() => setGlowDelta(null)}
        >
          {brother.name}
        </div>
      );
    });
    return renderedBrotherNames;
  }

  return (
    <span className={baksoSapi.className}>
      <BrotherModal
        brother={brother}
        open={brother != null}
        setClose={() => setBrother({})}
      />
      <div className={styles.videoContainer}>
        <Link href="/">
          <span className={styles.Back}>BACK TO HOME</span>
        </Link>
        <div className={styles.BrotherTitle}>
          <span ref={title} />
        </div>
        <div className={styles.BrotherAll}>
          <div className={styles.BrotherNamesContainer}>
            {renderBrotherNames()}
          </div>
          <div className={styles.BrotherImagesContainer}>
            {/* {renderAlumniImages()} */}
            {renderBrotherImages()}
          </div>
        </div>
      </div>
    </span>
  );
}

export default Brothers;
