import styled from "styled-components";

export const Slide = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - 55px);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`;

export const SlideContent = styled.div`
  position: absolute;
  top: 50%;
  left: 20%;
  transform: translate(-15%, -50%);
  pointer-events: none;
`;

export const SlideP = styled.p`
  color: #fff;
  font-size: clamp(1rem, 5vw, 1.5rem);
`;

export const SlideH1 = styled.h1`
  color: #fff;
  font-size: clamp(2rem, 5vw, 4rem);
`;

export const SlideBtn = styled.div`
  position: relative;
  width: max-content;
  padding: 1rem 2rem;
  margin-top: 2rem;
  border: 2px solid #974f31;
  border-radius: 3px;
  cursor: pointer;
  color: #fff;
  font-weight: 700;
  pointer-events: all;
  transition: all 0.2s ease-in-out;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #974f31;
    transform: scaleX(0);
    transition: transform 0.2s ease-in-out;
    transform-origin: left;
    opacity: 0.8;
    z-index: -1;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;
