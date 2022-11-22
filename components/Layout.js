import Head from "next/head";
import React, { useState, useEffect, useRef, createContext } from "react";

import Header from "./Header";
import Footer from "./Footer";

export const ThemeContext = createContext();

export default function Layout({ children }) {
  const containerRef = useRef();
  const [containerWidth, setContainerWidth] = useState(0);
  const [slideOffset, setSlideOffset] = useState(0);

  const getContainerWidth = () => containerRef.current.clientWidth;
  const getSlideOffset = () => {
    if (typeof window !== "undefined")
      return (window.innerWidth - getContainerWidth()) / 2;
  };

  useEffect(() => {
    setContainerWidth(getContainerWidth());
    setSlideOffset(getSlideOffset());

    const handleResize = () => {
      setContainerWidth(getContainerWidth());
      setSlideOffset(getSlideOffset());
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ containerWidth, slideOffset }}>
      <Head>
        <title>VenDesigNext.js</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
          <script charSet="utf-8"
                  type="text/javascript"
                  src="//js.hsforms.net/forms/embed/v2.js"></script>
      </Head>
      <Header />
      <div className="container" ref={containerRef}></div>
      <main
        className="min-h-screen overflow-x-hidden"
        style={{ "--container-width": containerWidth }}
      >
        {children}
      </main>
      <Footer />
    </ThemeContext.Provider>
  );
}
