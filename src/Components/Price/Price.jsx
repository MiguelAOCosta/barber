import React from "react";
import {
  Section,
  SectionTitle,
  Title,
  TitleStyle,
  ImgTitle,
} from "../../GlobalStyles";
import LogoImg from "../../Images/title.svg";
import { PriceSection } from "./PriceStyles";

const Price = () => {
  return (
    <Section
      style={{
        backgroundColor: "#f9f9f9",
        borderTop: "2px solid #f1f1f1",
        padding: "6rem 2rem 0 2rem",
      }}
    >
      <SectionTitle style={{ marginBottom: "6rem" }}>
        <Title>Preços</Title>
        <TitleStyle>
          <ImgTitle src={LogoImg} />
        </TitleStyle>
      </SectionTitle>

      <PriceSection>
        <h1>Preços Aqui!</h1>
      </PriceSection>
    </Section>
  );
};

export default Price;
