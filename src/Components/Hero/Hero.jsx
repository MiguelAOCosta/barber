import React from "react";
import { HeroContainer, FirstSection, HeroTitle, HeroBtn } from "./HeroStyles";

const Hero = () => {
  return (
    <HeroContainer>
      <FirstSection>
        <HeroTitle>Um passo mais próximo dos teus sonhos</HeroTitle>
        <HeroBtn>Agendar Corte</HeroBtn>
      </FirstSection>
    </HeroContainer>
  );
};

export default Hero;
