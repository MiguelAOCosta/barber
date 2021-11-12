import styled from "styled-components";

export const SectionAppointment = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AppointmentForm = styled.form`
  max-width: 700px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 300px));
  place-content: center;
  grid-gap: 1rem;
  grid-row-gap: 3rem;
`;

export const Form = styled.div`
  border-bottom: 1px solid #999;
  max-width: 300px;
  position: relative;
  cursor: pointer;
`;

export const InputForm = styled.input`
  background-color: transparent;
  border: none;
  color: #fff;
  width: 100%;
  font-size: 1rem;

  &:focus {
    outline: none;
  }
`;

export const Selectable = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const InfoSlected = styled.span`
  color: #999;
`;

export const Select = styled.div`
  position: absolute;
  background-color: #f0f0f0;
  padding: 0.5rem;
  z-index: 10;
  width: 100%;
`;

export const List = styled.ul`
  color: #333;
  list-style: none;
`;

export const Item = styled.li`
  padding: 0.5rem;
  cursor: pointer;
`;

export const BtnForm = styled.button`
  background: rgba(151, 79, 49, 0.8);
  border: none;
  border: 2px solid#974f31;
  border-radius: 3px;
  width: max-content;
  padding: 0.5rem 3rem;
  color: #fff;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;
