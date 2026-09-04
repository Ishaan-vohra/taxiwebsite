import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import SiteHeader from "../components/SiteHeader";
import styles from "../styles/Brother.module.css";

function House(props) {
  const elTitle = useRef(null);
  const typedTitle = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`64 | 66 BAY STATE ROAD`],
      typeSpeed: 80,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
    };

    typedTitle.current = new Typed(elTitle.current, optionsTitle);
    return () => {
      typedTitle.current.destroy();
    };
  }, []);

  return (
    <div className={styles.videoContainer}>
      <SiteHeader simple />
      <img className={styles.backgroundImage} src="./images/house.jpg" />
      <div className={styles.RushTitle}>
        <span ref={elTitle} />
      </div>
    </div>
  );
}

export default House;
