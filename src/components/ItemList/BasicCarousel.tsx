"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SlidDiv from "./SlidDiv";

import "./styles.css";

function BasicCarousel() {
  return (
    <div className=" px-14">
      <Swiper
        slidesPerGroupSkip={1}
        grabCursor={true}
        scrollbar={true}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper w-full "
      >
        <SwiperSlide>
          <SlidDiv />
        </SwiperSlide>
        <SwiperSlide>
          <SlidDiv />
        </SwiperSlide>
        <SwiperSlide>
          <SlidDiv />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default BasicCarousel;
