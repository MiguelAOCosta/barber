import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SliderContainer, LeftArrow, RightArrow, Slide } from "./SliderStyles";
import { ImgSlider } from "./SliderData";

const Slider = () => {
  const [CurrentSlide, setCurrentSlide] = useState(0);
  const length = ImgSlider.length;

  const prevSlide = () => {
    setCurrentSlide(CurrentSlide <= 0 ? length - 1 : CurrentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(CurrentSlide == length - 1 ? 0 : CurrentSlide + 1);
  };

  return (
    <SliderContainer>
      <LeftArrow onClick={prevSlide}>
        <IoIosArrowBack />
      </LeftArrow>
      <RightArrow onClick={nextSlide}>
        <IoIosArrowForward />
      </RightArrow>

      {ImgSlider.map((image, index) => {
        return (
          <Slide
            key={index}
            style={{
              backgroundImage: `url(${image.img})`,
              transform:
                index === 0 ? `translateX(-${CurrentSlide * 100}%)` : undefined,
            }}
          ></Slide>
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
