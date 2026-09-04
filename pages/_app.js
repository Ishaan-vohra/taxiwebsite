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
          position: "fixed",
          padding: "6px 10px",
          margin: "14px",
          bottom: 0,
          right: 0,
          backgroundColor: "rgba(8, 13, 22, 0.72)",
          border: "1px solid rgba(247, 242, 232, 0.34)",
          color: "rgba(247, 242, 232, 0.82)",
          fontFamily: "Alata, sans-serif",
          fontSize: "11px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        <a
          style={{ color: "inherit", fontFamily: "inherit" }}
          href="https://accessibility.mit.edu/"
        >
          Accessibility
        </a>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
