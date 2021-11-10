import React from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
  SectionParagraph,
} from "../../GlobalStyles";
import { ServicesSection } from "./ServicesStyles";
import LogoImg from "../../Images/title.svg";
import ServicesImg from "../../Images/services.png";
import Tesoura from "../../Images/tesoura.svg";

const Services = () => {
  return (
    <Section
      style={{ backgroundColor: "#f9f9f9", borderTop: "2px solid #f1f1f1" }}
    >
      <SectionTitle>
        <Title>Serviços</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>

        <SectionParagraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. In blanditiis
          voluptatem nemo aliquid possimus odit earum, neque ad magni sapiente,
          distinctio excepturi veniam sequi tenetur dolores consequatur minus
          officiis vitae?
        </SectionParagraph>
      </SectionTitle>

      <ServicesSection>
        <h1>Teste</h1>
        <h1>Teste</h1>
        <img src={ServicesImg} style={{ width: "40%" }} />
        <h1>Teste</h1>
        <h1>Teste</h1>
      </ServicesSection>
    </Section>
  );
};

export default Services;
