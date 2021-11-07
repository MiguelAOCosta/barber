import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import {
  AppSlider,
  Slide,
  SlideContent,
  SlideP,
  SlideH1,
  SlideBtn,
  Hand,
} from "./SliderStyles";
import { ImgSlider } from "./SliderData";
import { FaHandPointer } from "react-icons/fa";

import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";
import "swiper/modules/scrollbar/scrollbar.scss";

const Slider = () => {
  return (
    <AppSlider>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {ImgSlider.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide style={{ backgroundImage: `url(${item.img})` }}>
                <SlideContent>
                  <SlideP>{item.title1}</SlideP>
                  <SlideH1>{item.title2}</SlideH1>
                  <SlideBtn>Fazer Marcação</SlideBtn>
                </SlideContent>
              </Slide>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Hand>
        <FaHandPointer />
      </Hand>
    </AppSlider>
  );
};

export default Slider;
