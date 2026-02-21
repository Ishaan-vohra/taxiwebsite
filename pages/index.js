import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Banner from "../components/Banner";

import localFont from "next/font/local";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

export default function Home() {
  // Create reference to store the DOM element containing the animation
  const title = useRef(null);
  const header = useRef(null);
  // Create reference to store the Typed instance itself
  const typedTitle = useRef(null);
  const typedHeader = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`THETA XI`],
      typeSpeed: 40,
      backSpeed: 50,
      showCursor: false,
    };

    const optionsHeader = {
      strings: [`Delta Chapter - MIT`],
      typeSpeed: 40,
      backSpeed: 50,
      startDelay: 800,
      showCursor: false,
    };

    // elRef refers to the <span> rendered below
    typedTitle.current = new Typed(title.current, optionsTitle);
    typedHeader.current = new Typed(header.current, optionsHeader);
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typedTitle.current.destroy();
      typedHeader.current.destroy();
    };
  }, []);
  return (
    <div className={`pageContainer ${baksoSapi.className}`}>
      <Banner>
        <p style={{ fontSize: "18px", margin: 0 }}>
          🎉 Fall Rush 2024 is Happening! Check Out Our Rush Schedule!🕺
        </p>
      </Banner>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop id="vaydwalking">
          <source src="./house.mp4" type="video/mp4" />
        </video>
      </div>
      <div></div>
      <div className={styles.title}>
        <span ref={title} />
      </div>
      <div className={styles.header}>
        <span ref={header} />
      </div>
      <AnimatePresence className="Home-menuItems">
        <motion.div
          key={"brothers"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.25, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/brothers">
            <span className={styles.Link}>BROTHERS</span>
          </Link>
        </motion.div>
        <motion.div
          key={"summer"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.25, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/rush">
            <span className={styles.Link}>RUSH</span>
          </Link>
        </motion.div>
        <motion.div
          key={"contact"}
          initial={{ opacity: 0 }}
          transition={{ delay: 1.25, duration: 1.5 }}
          animate={{ opacity: 1 }}
          className="Home-menuItem"
        >
          <Link href="/contact">
            <span className={styles.Link}>CONTACT</span>
          </Link>
        </motion.div>
      </AnimatePresence>
      <div className="Home-menuItems"></div>
    </div>
  );
}
