import styled from "styled-components";

export const CalendarContainer = styled.div`
  width: 100%;
  color: #fff;
`;

export const Month = styled.h3`
  text-align: center;
  padding-bottom: 0.3rem;
  text-transform: capitalize;
`;

export const WeekContainer = styled.div`
  width: 100%;
  background-color: #974f31;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const Week = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.3rem 0;
  font-weight: 700;
  font-size: 0.8rem;
`;

export const WeekDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Day = styled.div`
  width: 100%;
  text-align: center;
  padding: 0.2rem 0;
  transition: all 0.2s ease-in-out;
  font-size: 0.8rem;

  &:hover {
    background-color: #333;
    border-radius: 5px;
  }
`;
