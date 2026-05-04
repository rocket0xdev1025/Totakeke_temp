import React, { useContext, useState } from "react";
import { HiX } from "react-icons/hi";
import { AppContext } from "../App";
import { CgMenuRight } from "react-icons/cg";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Header = () => {
  const { currentSection, darkMode } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      setShowMenu(false);
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${darkMode ? "dark" : ""}`}>
      <button className="logo-img"></button>
      <div className={`sections-links-holder ${showMenu ? "show" : ""}`}>
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("Home");
          }}
          className={
            currentSection === "Home"
              ? "active header-link"
              : currentSection === "About"
              ? "active header-link"
              : "header-link"
          }
        >
          About
        </a>
        <a
          href="#tokenomics"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("Tokenomics");
          }}
          className={
            currentSection === "Tokenomics"
              ? "active header-link"
              : "header-link"
          }
        >
          Tokenomics
        </a>
        <a
          href="#gallery"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("Gallery");
          }}
          className={
            currentSection === "Gallery" ? "active header-link" : "header-link"
          }
        >
          Gallery
        </a>
        <a
          href="#howtobuy"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("How to Buy");
          }}
          className={
            currentSection === "How to Buy"
              ? "active header-link"
              : "header-link"
          }
        >
          How to Buy
        </a>
      </div>
      <div className="btn-holder">
        <a
          className="button"
          href="https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xaF1B36ae084C6270724835b15b5470AA72aA0d05"
          target="_blank"
          rel="noreferrer"
        >
          Buy{" "}
          <FaArrowUpRightFromSquare
            style={{
              marginLeft: "5px",
            }}
          />
        </a>
      </div>
      <button
        className="hamburger"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        {!showMenu ? <CgMenuRight /> : <HiX />}
      </button>
    </header>
  );
};

export default Header;
