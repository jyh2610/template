"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { Section } from "./Section";

function MainSlide() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className="w-screen">
      <Swiper pagination={pagination} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
        <SwiperSlide>
          <Section />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MainSlide;
