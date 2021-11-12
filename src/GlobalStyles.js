import styled, { createGlobalStyle, css } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`
    :root{
        --swiper-theme-color: #974f31;
    }

    ::selection {
      color: #fff;
      background: rgba(151, 79, 49, 0.8);
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
    }

    html, body{
        overflow-x: hidden;
    }

    .swiper-button-prev, .swiper-button-next{
        @media screen and (max-width:800px){
            display: none;
        }
    }
`;

export default GlobalStyle;

export const Section = styled.section`
  padding: 6rem 2rem;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: clamp(1.5rem, 5vw, 2rem);
  color: #111;
`;

const StyledTitle = css`
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  height: 2px;
  background-color: #974f31;
`;

export const TitleStyle = styled.div`
  width: 60px;
  display: flex;
  justify-content: center;
  position: relative;
  margin-bottom: 1.5rem;

  &::before {
    ${StyledTitle}
    left: 120%
  }

  &::after {
    ${StyledTitle}
    right: 120%;
  }
`;

export const ImgTitle = styled.img`
  width: 50px;
`;

export const SectionParagraph = styled.p`
  color: #333;
  max-width: 600px;
  text-align: center;
  margin-bottom: 6rem;
`;
