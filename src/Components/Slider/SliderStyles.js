import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  height: calc(100vh - 55px);
  display: flex;
  flex-wrap: nowrap;
  overflow: hidden;

  @media screen and (max-width: 800px) {
    height: 100vh;
  }
`;

export const LeftArrow = styled.div`
  position: absolute;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  font-size: 1.4rem;
  color: #974f31;
  cursor: pointer;
  border: 2px solid #974f31;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  z-index: 98;

  &:hover {
    color: #adadad;
    background-color: #974f31;
  }
`;

export const RightArrow = styled.div`
  position: absolute;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  font-size: 1.4rem;
  color: #974f31;
  cursor: pointer;
  border: 2px solid #974f31;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;
  z-index: 98;

  &:hover {
    color: #adadad;
    background-color: #974f31;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: all 0.5s ease-in-out;
`;
