import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "./Layout";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";

import styles from "../styles/Carousel.module.css";

export default function Carousel({ slides = [] }) {
  const theme = useContext(ThemeContext);
  const slideOffset = theme.slideOffset;

  const onSlideChange = () => {};

  slides = slides.map((slide, index) => {
    return (
      <SwiperSlide className={styles.slide} key={index}>
        {slide}
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      modules={[FreeMode]}
      freeMode={{
        enabled: true,
        momentumRatio: 0.2,
      }}
      spaceBetween={50}
      slidesPerView={3}
      slidesOffsetBefore={slideOffset}
      slidesOffsetAfter={slideOffset}
      onSlideChange={onSlideChange}
    >
      {slides}
    </Swiper>
  );
}
