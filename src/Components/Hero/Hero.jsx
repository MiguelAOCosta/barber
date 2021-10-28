import React from "react";
import {
  HeroContainer,
  FirstSection,
  HeroTitle,
  HeroBtn,
  SecondSectio,
  InfoCut,
  CutImg,
  CutPrice,
  CutType,
} from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <FirstSection>
        <HeroTitle>Um passo mais próximo dos teus sonhos</HeroTitle>
        <HeroBtn>Agendar Corte</HeroBtn>
      </FirstSection>
      <SecondSectio>
        <InfoCut>
          <CutImg>1</CutImg>
          <CutPrice>15€</CutPrice>
          <CutType>Cabelo</CutType>
        </InfoCut>
        <InfoCut>
          <CutImg>2</CutImg>
          <CutPrice>10€</CutPrice>
          <CutType>Barba</CutType>
        </InfoCut>
        <InfoCut>
          <CutImg>3</CutImg>
          <CutPrice>20€</CutPrice>
          <CutType>Cabelo e barba</CutType>
        </InfoCut>
      </SecondSectio>
    </HeroContainer>
  );
};

export default Hero;
