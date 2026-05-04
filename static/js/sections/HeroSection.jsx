import React, { useEffect, useRef, useState } from "react";
import logoImage from "../assets/totakeke.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import DecryptedText from "../components/DecryptedText";

const HeroSection = ({ id, toggleDark }) => {
  const ballsHolderRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const page = document.getElementById("page");

    const handleScroll = () => {
      if (ballsHolderRef.current) {
        const scrollY = page.scrollTop;
        ballsHolderRef.current.style.transform = `translateY(${
          scrollY * 0.3
        }px)`;
      }
    };

    page.addEventListener("scroll", handleScroll);

    return () => {
      page.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showFull, setShowFull] = useState(false);

  return (
    <section id={id} className="hero-section page-section">
      <div className="left">
        <div className="heading">
          <p> </p>
          <h1 className="big-hero">
            {/* <DecryptedText
              text="Apple"
              animateOn="view"
              revealDirection="center"
              speed={20}
            /> */}
            Apple
          </h1>
          <div className="cta-holder">
            <a
              className="button"
              href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xcomingsoon"
              target="_blank"
              rel="noreferrer"
            >
              Buy Now!
            </a>
            <a
              href="https://t.me/applefox_eth"
              target="_blank"
              rel="noreferrer"
            >
              Join the community
            </a>
          </div>
        </div>
        <small></small>
        <p className="details">
          {showFull
            ? `She is going so viral on TikTok. All fees are being donated to her animal shelter.`
            : "Apple The Fox was rescued by a girl running an animal shelter, due to it had hydrocephalus."}
        </p>
        <div className="pagination">
          <button
            className="pagination-btn"
            onClick={() => {
              setShowFull(false);
            }}
            disabled={!showFull}
          >
            <FaArrowLeft />
          </button>
          <button
            className="pagination-btn"
            onClick={() => {
              setShowFull(true);
            }}
            disabled={showFull}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="balls-holder" ref={ballsHolderRef}>
        {/* <div className="ball i"></div> */}
        {/* <div className="ball ii"></div> */}
        {/* <div className="ball iii"></div> */}
        {/* <div
          className="ball iv"
          onClick={toggleDark}
          style={{
            display: "flex",
          }}
        ></div> */}
      </div>
      <div className="right">
        <div className="image-holder">
          <img src={logoImage} alt="Totakeke" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
