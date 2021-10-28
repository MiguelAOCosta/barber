import React from "react";
import {
  HeroContainer,
  FirstSection,
  HeroTitle,
  HeroBtn,
  SecondSectio,
  InfoCut,
  CutImg,
  Img,
  CutPrice,
  CutType,
} from "./HeroStyles";
import ImgTesoura from "../../Images/tesoura.svg";
import ImgNavalha from "../../Images/navalha.svg";
import ImgTesouraNavalha from "../../Images/tesoura-navalha.svg";

const Hero = () => {
  return (
    <HeroContainer>
      <FirstSection>
        <HeroTitle>Um passo mais próximo dos teus sonhos</HeroTitle>
        <HeroBtn>Agendar Corte</HeroBtn>
      </FirstSection>
      <SecondSectio>
        <InfoCut>
          <CutImg>
            <Img src={ImgTesoura} />
          </CutImg>
          <CutPrice>15€</CutPrice>
          <CutType>Cabelo</CutType>
        </InfoCut>
        <InfoCut>
          <CutImg>
            <Img src={ImgNavalha} />
          </CutImg>
          <CutPrice>10€</CutPrice>
          <CutType>Barba</CutType>
        </InfoCut>
        <InfoCut>
          <CutImg>
            <Img src={ImgTesouraNavalha} />
          </CutImg>
          <CutPrice>20€</CutPrice>
          <CutType>Cabelo e barba</CutType>
        </InfoCut>
      </SecondSectio>
    </HeroContainer>
  );
};

export default Hero;
