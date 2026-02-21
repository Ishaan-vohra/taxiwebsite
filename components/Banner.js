import { useState } from "react";
import { router } from "next/router";

const Banner = ({ children, href = "/rush" }) => {
  const [closed, setClosed] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div
      className="summer-housing-banner"
      style={{
        display: closed ? "none" : "block",
        height: "fit-content",
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "1000",
        background: "rgba(0,0,0,0.2)",
        padding: "6px",
      }}
      onClick={handleClick}
    >
      <div
        className="summer-housing-banner-text"
        style={{
          textAlign: "center",
          color: "white",
          fontFamily: ["Alata", "sans-serif"],
          cursor: "pointer",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Banner;
