import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";

import { HistoricalDate } from "../historicalDates";
import "./BlockSwiper.scss";
import { useEffect, useRef } from "react";

interface BlockSwiperProps {
  historicalDates: HistoricalDate[];
  choosenDate: number;
}

export default function BlockSwiper({
  historicalDates,
  choosenDate,
}: BlockSwiperProps) {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiper = swiperRef.current as unknown as HTMLElement;
    swiper.animate(
      [
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
      ],
      {
        duration: 1000,
        iterations: 1,
      }
    );
  });
  const slides = historicalDates[choosenDate].years.map((year) => {
    return (
      <SwiperSlide className="block-swiper__slide">
        <h1>{year.year}</h1>
        <p>{year.description}</p>
      </SwiperSlide>
    );
  });
  return (
    <section className="block-swiper-wrapper" ref={swiperRef}>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        slidesPerView={4}
        spaceBetween={60}
        className="block-swiper"
      >
        {slides}
      </Swiper>
      <button className="custom-swiper-button-prev">
        <img src="./arrow.png" alt="left" />
      </button>
      <button className="custom-swiper-button-next">
        {" "}
        <img
          src="./arrow.png"
          alt="right"
          style={{ transform: "rotate(180deg)" }}
        />
      </button>
    </section>
  );
}
