import styled from "styled-components";

export const AboutContainer = styled.section`
  width: 100%;
  background-color: rgb(21, 21, 21);
  color: #fff;
`;

export const AboutContent = styled.div`
  width: 100%;
  padding: 3rem 2rem;
`;

export const TitleContainer = styled.h1`
  text-align: center;
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  padding-bottom: 2rem;
`;

export const AboutInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const AboutParagraph = styled.p`
  flex: 1;
  padding-bottom: 2rem;

  @media screen and (min-width: 700px) {
    padding-bottom: 0rem;
    padding-right: 1rem;
  }
`;

export const AboutImg = styled.img`
  flex: 1;
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-radius: 5px;
`;
