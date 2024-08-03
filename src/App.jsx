/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/fontawesome-svg-core";
import {} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-regular-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/react-fontawesome";

import Hero from "./pages/homepage/hero/Hero";
import Bio from "./pages/homepage/bio/Bio";
import Skills from "./pages/homepage/skills/Skills";
import Posrtfolio from "./pages/homepage/portfolio/Posrtfolio";
import Footer from "./pages/homepage/footer/Footer";
import { useEffect } from "react";

function App() {
    // const [count, setCount] = useState(0);

    // scroll smoth =>
    // useEffect(() => {
    //     const handleScroll = (event) => {
    //         event.preventDefault();
    //         if (event.deltaY > 0) {
    //             window.scrollBy({
    //                 top: window.innerHeight,
    //                 left: 0,
    //                 behavior: "smooth",
    //             });
    //         } else {
    //             window.scrollBy({
    //                 top: -window.innerHeight,
    //                 left: 0,
    //                 behavior: "smooth",
    //             });
    //         }
    //     };

    //     window.addEventListener("wheel", handleScroll, { passive: false });

    //     return () => {
    //         window.removeEventListener("wheel", handleScroll);
    //     };
    // }, []);

    return (
        <>
            <Hero />
            <Bio />
            <Skills />
            <Posrtfolio />
            <Footer />
        </>
    );
}

export default App;
