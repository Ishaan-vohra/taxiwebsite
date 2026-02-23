import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import React, { useEffect } from "react";

import { DefaultSeo } from "next-seo";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <React.Fragment>
      <Head>
        <title>Theta Xi - MIT</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Alata&family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <DefaultSeo
        openGraph={{
          type: "website",
          url: "https://txi.mit.edu",
          siteName: "Theta Xi - MIT",
          images: [
            {
              url: "https://txi.mit.edu/rush_banner.png",
              width: 5164,
              height: 2904,
              alt: "F23 Rush Banner",
              type: "image/png",
            },
          ],
        }}
      />
      <Component {...pageProps} />
      <div
        style={{
          width: "100%",
          textAlign: "center",
          padding: "8px",
          backgroundColor: "rgba(0,0,0,0.7)",
          color: "#ccc",
          fontFamily: "Alata, sans-serif",
          fontSize: "12px",
        }}
      >
        Webmaster: Ishaan Vohra,{" "}
        <a href="mailto:txi-web@mit.edu" style={{ color: "#ccc" }}>
          txi-web@mit.edu
        </a>
      </div>
      <div
        style={{
          position: "fixed",
          padding: "4px",
          margin: "8px",
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0, 0.5)",
          borderRadius: "4px",
          color: "#b8b8b8",
          fontFamily: "sans-serif",
          fontSize: "14px",
          textDecoration: "underline",
        }}
      >
        <a
          style={{ color: "white", fontFamily: ["Alata", "sans-serif"] }}
          href="https://accessibility.mit.edu/"
        >
          Accessibility
        </a>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
