import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { SliderContainer, LeftArrow, RightArrow, Slide } from "./SliderStyles";
import { ImgSlider } from "./SliderData";

const Slider = () => {
  const [CurrentSlide, setCurrentSlide] = useState(0);
  const length = ImgSlider.length;

  let pressedDown = 0;
  let pressedUp = 0;

  const prevSlide = () => {
    setCurrentSlide(CurrentSlide <= 0 ? length - 1 : CurrentSlide - 1);
  };

  const nextSlide = () => {
    setCurrentSlide(CurrentSlide === length - 1 ? 0 : CurrentSlide + 1);
  };

  const MouseDown = (e) => {
    pressedDown = e.clientX;
  };

  const MouseUp = (e) => {
    pressedUp = e.clientX;

    if (pressedDown - pressedUp >= 100) {
      nextSlide();
    } else if (pressedDown - pressedUp <= -100) {
      prevSlide();
    }
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
            onMouseDown={MouseDown}
            onMouseUp={MouseUp}
            style={{
              backgroundImage: `url(${image.img})`,
              marginLeft: index === 0 ? `-${CurrentSlide * 100}%` : undefined,
            }}
          />
        );
      })}
    </SliderContainer>
  );
};

export default Slider;
