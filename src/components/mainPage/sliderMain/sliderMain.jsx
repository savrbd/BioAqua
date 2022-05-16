import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const SliderMain = () => {
    return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src='https://static.insales-cdn.com/assets/1/5148/996380/1638193246/slide1_image.jpg' alt="..."/></SwiperSlide>
        <SwiperSlide><img src='https://static.insales-cdn.com/assets/1/5148/996380/1638193246/slide2_image.jpg' alt="..."/></SwiperSlide>
        <SwiperSlide><img src='https://static.insales-cdn.com/assets/1/5148/996380/1638193246/slide3_image.jpg' alt="..."/></SwiperSlide>
      </Swiper>
    </>
        );
}
 
export default SliderMain;