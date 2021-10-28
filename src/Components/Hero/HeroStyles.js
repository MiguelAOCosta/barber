import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem 2rem;
  background-color: #fff;
  display: flex;
  align-items: center;
`;

export const FirstSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const HeroTitle = styled.h2`
  font-size: clamp(1.2rem, 5vw, 2rem);
  margin-bottom: 1rem;
`;

export const HeroBtn = styled.div`
  width: max-content;
  padding: 1rem 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 700;
  background-color: #f2c533;
`;
