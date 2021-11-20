import React from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
  SectionParagraph,
} from "../../GlobalStyles";
import {
  BarberSection,
  Barber,
  ImgBarber,
  BarberInfo,
  BarberName,
  BarberLevel,
} from "./BarbersStyles";
import LogoImg from "../../Images/title.svg";
import BarberImg from "../../Images/barber.jpg";

const Barbers = () => {
  return (
    <Section>
      <SectionTitle>
        <Title>Barbeiros</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>

        <SectionParagraph>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui officiis
          quos quidem quisquam eligendi sed nihil porro earum accusantium
          dolorum?
        </SectionParagraph>
      </SectionTitle>

      <BarberSection>
        <Barber>
          <ImgBarber src={BarberImg} />
          <BarberInfo>
            <BarberName>Miguel Costa</BarberName>
            <BarberLevel>Fundador</BarberLevel>
          </BarberInfo>
        </Barber>

        <Barber>
          <ImgBarber src={BarberImg} />
          <BarberInfo>
            <BarberName>Miguel Costa</BarberName>
            <BarberLevel>Fundador</BarberLevel>
          </BarberInfo>
        </Barber>
      </BarberSection>
    </Section>
  );
};

export default Barbers;
