import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../styles/Brother.module.css";
import Link from "next/link";

const h2Style = {
  color: "black",
  textTransform: "none",
  fontFamily: "sans-serif",
  fontSize: "24px",
};

function House(props) {
  const elTitle = useRef(null);
  const typedTitle = useRef(null);

  useEffect(() => {
    const optionsTitle = {
      strings: [`SUMMER HOUSING`],
      typeSpeed: 80,
      //   backSpeed: 50,
      //   loop: true,
      //   loopCount: Infinity,
      showCursor: true,
    };

    typedTitle.current = new Typed(elTitle.current, optionsTitle);
    return () => {
      typedTitle.current.destroy();
    };
  }, []);

  return (
    <div>
      <Link href="/">
        <span
          style={{ position: "absolute", zIndex: 1, fontSize: "40px" }}
          className={styles.Back}
        >
          BACK TO HOME
        </span>
      </Link>
      <div style={{ position: "fixed", zIndex: -1 }}>
        <img className={styles.backgroundImage} src="./images/house.jpg" />
        <div className={styles.videoContainer} />
      </div>
      <div className={styles.RushTitle}>
        <span ref={elTitle} />
      </div>
      <div
        style={{
          margin: "auto",
          marginTop: "-40px",
          marginBottom: "40px",
          left: 0,
          right: 0,
          maxWidth: "1000px",
          minHeight: "500px",
          padding: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          textAlign: "center",
          // userSelect: "all",
        }}
      >
        <img
          style={{ width: "100%", paddingBottom: "20px" }}
          src="./images/summer_housing_poster.jpg"
        />
      </div>
    </div>
  );
}

export default House;
