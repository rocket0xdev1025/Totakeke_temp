import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutSection from "./sections/AboutSection";
// import Menu from "./components/Menu";
// import AboutSection from "./sections/AboutSection";
// import CommunityHub from "./sections/CommunityHub";
// import EducationalResourcesSection from "./sections/EducationalResourcesSection";
import HeroSection from "./sections/HeroSection";
// import HeroSection from "./sections/HeroSection";
import HowToBuySection from "./sections/HowToBuySection";
import MemeGeneratorSection from "./sections/MemeGeneratorSection";
import NftMarketplaceSection from "./sections/NftMarketplaceSection";
import TokenomicsSection from "./sections/TokenomicsSection";
import "./styles/index.scss";
import { useState, useEffect, createContext } from "react";
import MemeSwiper from "./sections/MemeSwiper"; // Add this import
import ClickSpark from "./components/ClickSpark";
import CurvedLoop from "./components/CurvedLoop";

export const AppContext = createContext();

function App() {
  const [currentSection, setCurrentSection] = useState("Home");
  const [darkMode, setDarkMode] = useState(true);
  const memeImages = [
    "/images/1.jpeg",
    "/images/2.jpeg",
    "/images/3.jpeg",
    "/images/4.jpeg",
    "/images/5.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/8.jpeg",
    "/images/9.jpeg",
    "/images/10.jpeg",
    "/images/11.jpeg",
    "/images/12.jpeg",
    "/images/13.jpeg",
    "/images/14.jpeg",
    "/images/15.jpeg",
    "/images/16.jpeg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
            document.title = `${entry.target.id} | $TOTAKEKE`;
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll(".page-section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // useEffect(() => {
  //   const isDark = window.localStorage.getItem("isDark");
  //   if (isDark) {
  //     setDarkMode(true);
  //     document
  //       .querySelector('meta[name="theme-color"]')
  //       .setAttribute("content", "#222023");
  //   } else {
  //     setDarkMode(false);
  //     window.localStorage.removeItem("isDark");
  //     document
  //       .querySelector('meta[name="theme-color"]')
  //       .setAttribute("content", "#ebdfc0");
  //   }
  // }, []);

  const toggleDark = () => {
    if (!darkMode) {
      window.localStorage.setItem("isDark", true);
      setDarkMode(true);
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#0f0e0f");
    } else {
      window.localStorage.removeItem("isDark");
      setDarkMode(false);
      document
        .querySelector('meta[name="theme-color"]')
        .setAttribute("content", "#0f0e0f");
    }
  };

  return (
    <>
      <AppContext.Provider
        value={{ currentSection, darkMode, setCurrentSection }}
      >
        <Header />
        <main
          className={`page ${currentSection || ""} ${darkMode ? "dark" : ""}`}
          id="page"
        >
          <HeroSection id="Home" toggleDark={toggleDark} />
          <CurvedLoop
            marqueeText="TOTAKEKE ✦ DARK CHEEMS ✦ CTO ✦ TOTAKEKE ✦ DARK CHEEMS ✦ CTO ✦ TOTAKEKE ✦ DARK CHEEMS ✦ CTO ✦ "
            speed={3}
            curveAmount={400}
            direction="left"
            interactive={true}
            className="custom-text-style"
          />
          <AboutSection id="About" toggleDark={toggleDark} />
          <TokenomicsSection id="Tokenomics" />
          <MemeSwiper images={memeImages} id={"Gallery"} />
          <HowToBuySection id="How to Buy" />
          {/* <MemeGeneratorSection id="Meme Generator" /> */}
          {/* <NftMarketplaceSection id="NFT Marketplace" /> */}
          <Footer />
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
