import { useState, useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../styles/Brother.module.css";
import Link from "next/link";

import localFont from "next/font/local";

const baksoSapi = localFont({ src: "./BaksoSapi.otf" });

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
      strings: [`CONTACT`],
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
    <div className={`${styles.videoContainer} ${baksoSapi.className}`}>
      <Link href="/">
        <span
          style={{ position: "absolute", zIndex: 1, fontSize: "40px" }}
          className={styles.Back}
        >
          BACK TO HOME
        </span>
      </Link>
      <img className={styles.backgroundImage} src="./images/house.jpg" />
      <div className={styles.RushTitle}>
        <span ref={elTitle} />
      </div>
      <div
        style={{
          margin: "auto",
          marginBottom: "40px",
          left: 0,
          right: 0,
          maxWidth: "700px",
          minHeight: "500px",
          padding: "40px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          textAlign: "center",
          position: "absolute",
          fontFamily: "sans-serif",
          // userSelect: "all",
        }}
      >
        <h1 style={{ color: "black", textTransform: "none" }}>
          President: Powell Zhang
        </h1>
        <h2 style={h2Style}>txi-president [at] mit.edu</h2>
        <br />
        <h1 style={{ color: "black", textTransform: "none" }}>
          Secretary: Elliot Liu
        </h1>
        <h2 style={h2Style}>txi-secretary [at] mit.edu</h2>
        <br />
        <h1 style={{ color: "black", textTransform: "none" }}>
          Social: Franklin Wang | Ryan Yang | Kingston Lew
        </h1>
        <h2 style={h2Style}> txi-social [at] mit.edu</h2>
        <br />
        <h1 style={{ color: "black", textTransform: "none" }}>
          General Officers
        </h1>
        <h2 style={h2Style}>txi-officers [at] mit.edu</h2>
        <br />
        {/* <h1 style={{ color: "black", textTransform: "none" }}>
          Summer Housing: Darren Yao
        </h1>
        <h2 style={h2Style}> txi-summerhousemanager [at] mit.edu</h2> */}
      </div>
    </div>
  );
}

export default House;
