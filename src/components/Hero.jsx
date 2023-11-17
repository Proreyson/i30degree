import i30 from "../assets/photo.png";
import Typewriter from "typewriter-effect";
import React, { useEffect, useRef } from "react";

function Hero() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const startTypewriter = () => {
      if (typewriterRef.current) {
        typewriterRef.current.typeString("I30 DEGREE").start();
      }
    };

    const timer = setTimeout(startTypewriter, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hero container col-xxl-8 px-4 py-5 mt-3" id="hero">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-12 col-lg-6 text-center">
            <img
              src={i30}
              className="hero-img d-block mx-auto img-fluid rounded"
              alt="Product theme"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 ">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              <Typewriter
                options={{ loop: false }}
                onInit={(typewriter) => {
                  typewriterRef.current = typewriter;
                }}
              />
              ENGINEERING SERVICES & INDUSTRIAL SUPPLIES TRADING
            </h1>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
