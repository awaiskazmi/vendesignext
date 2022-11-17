import Head from "next/head";
import React, {useState, useEffect, useRef, createContext} from "react";

export const ThemeContext = createContext();

export default function Layout({children}) {
    const containerRef = useRef();
    const [containerWidth, setContainerWidth] = useState(0);
    const [slideOffset, setSlideOffset] = useState(0);

    const getContainerWidth = () => containerRef.current.clientWidth;
    const getSlideOffset = () => {
        if (typeof window !== 'undefined')
        return (window.innerWidth - getContainerWidth())/2 + 7
    };

    useEffect(() => {
        setContainerWidth(getContainerWidth());
        setSlideOffset(getSlideOffset());

        const handleResize = () => {
            setContainerWidth(getContainerWidth());
            setSlideOffset(getSlideOffset());
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{ containerWidth, slideOffset }}>
            <Head>
                <title>VenDesigNext.js</title>
                <meta name="viewport"
                      content="initial-scale=1.0, width=device-width"/>
                <link rel="shortcut icon"
                      href="/favicon.png"/>
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
                      rel="stylesheet"/>
            </Head>
            <header className="p-3 bg-black text-white">
                <p>Header</p>
            </header>
            <div className="container" ref={containerRef}></div>
            <main
                className="min-h-screen overflow-x-hidden"
                style={{"--container-width": containerWidth}}
            >
                {children}
            </main>
            <footer className="p-3 bg-black text-white">
                <p>Copyrights &copy; 2022.</p>
            </footer>
        </ThemeContext.Provider>
    );
}
