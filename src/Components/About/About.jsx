import React from "react";
import {
  AboutContainer,
  AboutContent,
  TitleContainer,
  AboutInfo,
  AboutParagraph,
  AboutImg,
} from "./AboutStyles";
import AboutBgImg from "../../Images/barber-about.png";

const About = () => {
  return (
    <AboutContainer>
      <AboutContent>
        <TitleContainer>Sobre mim</TitleContainer>
        <AboutInfo>
          <AboutParagraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa
            deleniti aperiam alias quasi reprehenderit ut temporibus laborum
            eligendi voluptatibus? Nihil tempore atque fugiat itaque id delectus
            provident incidunt ut. Deleniti eaque debitis voluptatum aliquid
            itaque odio saepe perspiciatis ullam neque optio. Nihil cum
            perferendis tenetur, suscipit ex quos quam quisquam?
          </AboutParagraph>
          <AboutImg src={AboutBgImg} />
        </AboutInfo>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
