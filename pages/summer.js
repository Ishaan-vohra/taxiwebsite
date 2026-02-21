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
          src="./images/tripleRoom.jpg"
        />
        <div style={{ fontFamily: ["Alata", "sans-serif"] }}>
          <h5>
            Theta Xi (64 Bay State Road, Boston) is offering summer housing!
            Located in Back Bay, the house is located a 1-minute walk away from
            the green line of the T and Blue Bikes stations, a 15-minute walk
            away from the Stud/Maseeh, and 20-minute walk away from Stata. Also
            located nearby include restaurants, grocery stores, etc.
          </h5>
          <h5>
            House amenities include a pool table and game room, common room,
            dining room, industrial kitchen, and library. Rooms are located on
            the second, third, and fourth floors as well as the basement, and we
            have quads, triples, doubles, and singles available. All of our
            rooms come with air conditioning units.
          </h5>
          <h5>
            To apply, please fill out this{" "}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCoWRGuFB2xdE0R0Ry1mhLW9EEIEoIbm6NhRSYI0-O7jgfJA/viewform">
              <u>form</u>
            </a>
            , and we will reach out to you with a decision. This application is
            nonbinding, the commitment date for payments will be later.
          </h5>
          <h1 style={{ color: "black", textTransform: "none" }}>Pricing</h1>
          <h3>Quad: $2850, Triple: $2950, Double: $3550, Single: $3950</h3>
          <h1>Questions?</h1>
          <h3>Contact: dyao@mit.edu</h3>
        </div>
      </div>
    </div>
  );
}

export default House;
