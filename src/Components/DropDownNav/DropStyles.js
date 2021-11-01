import styled from "styled-components";

export const DropContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #adadad;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  z-index: 99;
  position: absolute;
  top: ${({ isOpen }) => (isOpen ? "0" : "-150%")};
  transition: all 0.2s ease-in-out;
`;

export const NavBar = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  list-style: none;
  padding-top: 30px;
`;

export const NavLink = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 1rem 0;
  transition: all 0.2s ease-in-out;
  position: relative;

  &:hover {
    background: rgba(151, 79, 49, 0.5);
  }
`;
