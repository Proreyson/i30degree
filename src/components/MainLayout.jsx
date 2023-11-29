import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import Partners from "./Partners";
import About from "./About";
import Products from "./Products";
import Services from "./Services";
import Contact from "./Contact";
import Links from "./Links";
import Chatbot from "./Chatbot";

function MainLayout() {
  const [openArrow, setOpenArrow] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 500) {
      setOpenArrow(true);
    } else {
      setOpenArrow(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <body>
        <Hero />
        <About />
        <Products />
        <Services />
        <Partners />
        <Contact />
        <Links />
        <Chatbot />
      </body>
      <footer>
        <div className={openArrow ? "arrowUp active" : "arrowUp"}>
          <a href="#hero">
            {" "}
            <FontAwesomeIcon icon={faArrowUp} />
          </a>
        </div>
      </footer>
    </>
  );
}

export default MainLayout;
