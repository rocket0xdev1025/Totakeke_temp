import React, { useRef, useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaPause,
  FaPlay,
  FaShare,
} from "react-icons/fa";

const MemeSwiper = ({ images, id }) => {
  const swiperRef = useRef(null); // Create a ref for the swiper container

  const [playState, setPlayState] = useState(true);

  const scroll = (direction) => {
    if (playState && swiperRef.current) {
      const id = swiperRef.current;
      // const swiperLeft = Math.ceil(id.scrollLeft)
      // const swiperWidth = Math.ceil(id.scrollWidth)
      const scrollWidth = id.scrollWidth;
      const screenWidth = window.innerWidth;
      const clientWidth = Math.ceil(id.clientWidth);
      const divisionValue = screenWidth > 1000 ? 3 : screenWidth > 480 ? 2 : 1;
      const movementWidth = clientWidth / divisionValue;
      // const id = document?.getElementById(id)
      swiperRef.current.scrollBy({
        top: 0,
        left:
          direction === "next"
            ? movementWidth
            : direction === "prev"
            ? -movementWidth
            : direction === "prev-start"
            ? -scrollWidth
            : -scrollWidth,
        behavior: "smooth", // Smooth scrolling
      });
      return;
    } else {
      console.clear();
      console.log("Playstate paused");
    }
  };

  const scrollDef = (direction) => {
    if (swiperRef.current) {
      const id = swiperRef.current;
      const screenWidth = window.innerWidth;
      const clientWidth = Math.ceil(id.clientWidth);
      const divisionValue = screenWidth > 1000 ? 3 : screenWidth > 480 ? 2 : 1;
      const movementWidth = clientWidth / divisionValue;
      swiperRef.current.scrollBy({
        top: 0,
        left:
          direction === "next"
            ? movementWidth
            : direction === "prev"
            ? -movementWidth
            : direction === "prev-start"
            ? -1000000000000
            : -100000000000,
        behavior: "smooth",
      });
      return;
    } else {
      console.clear();
      console.log("Playstate paused");
    }
  };

  useEffect(() => {
    let interval;
    if (playState) {
      interval = setInterval(() => {
        const id = swiperRef.current;
        const swiperLeft = Math.ceil(id.scrollLeft);
        const swiperWidth = Math.ceil(id.scrollWidth);
        const clientWidth = Math.ceil(id.clientWidth);
        if (swiperLeft < swiperWidth - clientWidth) {
          scroll("next");
        } else {
          scroll("prev-start");
        }
      }, 2000);
    }

    return () => clearInterval(interval);

    // eslint-disable-next-line
  }, [playState]);

  return (
    <section className="meme-swiper-section page-section" id={id}>
      <h2>Gallery</h2>
      <div className="swiper-container" ref={swiperRef}>
        {images.map((image, index) => (
          <div className="swiper-slide" key={index}>
            {/* <div className="myidx" id={`image${index}`}>
            </div> */}
            <img src={image} alt={`Meme ${index + 1}`} />
            {index === "10000" && (
              <button
                className="share-btn"
                onClick={() => {
                  // downloadImage(image)
                }}
              >
                <FaShare />
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="btn-holder">
        <button
          className="swiper-button-prev button"
          onClick={() => {
            scrollDef("prev");
            setPlayState(false);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="swiper-button-prev button small"
          onClick={() => setPlayState(!playState)}
        >
          {!playState ? <FaPlay /> : <FaPause />}
        </button>
        {/* {images?.length !== "axa" && <>
        </>} */}
        <button
          className="swiper-button-next button"
          onClick={() => {
            scrollDef("next");
            setPlayState(false);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default MemeSwiper;
