import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding: 1rem 2rem;
  background-color: #f9f3f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FirstSection = styled.div`
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

export const SecondSectio = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-top: 1rem;
`;

export const InfoCut = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CutImg = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #fedbbf;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 25px;
  height: 25px;
`;

export const CutPrice = styled.p`
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.3rem;
`;

export const CutType = styled.p`
  text-align: center;
  font-size: 0.7rem;
`;
