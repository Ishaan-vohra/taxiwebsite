import { useState, useEffect } from "react";
import styles from "../styles/Brother.module.css";

function ProfilePhoto(props) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    window?.addEventListener("resize", handleResize);
  });

  const handleResize = () => {
    if (window?.innerWidth < 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  return (
    <div
      className={
        props.position ? styles.OfficerContainer : styles.BrotherContainer
      }
    >
      <img
        src={props.src}
        onClick={() => props.onClick()}
        onMouseOver={() => props.onMouseOver()}
        onMouseOut={() => props.onMouseOut()}
        alt={props.delta}
        style={props.gray ? { filter: "grayscale(100%)" } : {}}
        className={
          props.hasGlow ? styles.BrotherImageGlow : styles.BrotherImage
        }
      />
      <div className={styles.MobileProfileName}>
        <div
          className={props.hasGlow ? styles.EventNameGlow : styles.EventName}
        >
          {props.name}
        </div>
        {props.position && (
          <>
            <div className={styles.PositionName}>{props.position}</div>
          </>
        )}
        {props.contact && (
          <>
            <div className={styles.PositionName} style={{ fontSize: "14px" }}>
              {props.contact}
              <br /> [at] mit.edu
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProfilePhoto;
