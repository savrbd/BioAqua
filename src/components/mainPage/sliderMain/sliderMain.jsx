import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./slider.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import slide1 from '../../../images/slider/slide1.jpg';
import slide2 from '../../../images/slider/slide2.jpg';
import slide3 from '../../../images/slider/slide3.jpg'

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
        <SwiperSlide><img src={slide1} alt="..."/></SwiperSlide>
        <SwiperSlide><img src={slide2} alt="..."/></SwiperSlide>
        <SwiperSlide><img src={slide3} alt="..."/></SwiperSlide>
      </Swiper>
    </>
        );
}
 
export default SliderMain;