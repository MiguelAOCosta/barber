import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  background-color: #f9f3f0;
  padding: 1rem 2rem;
  position: fixed;
  z-index: 100;
`;

export const NavbarContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f9f3f0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h3`
  font-size: 1.3rem;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
`;

export const Option = styled.li`
  cursor: pointer;
  transition: transform 0.1s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }

  &:nth-child(1) {
    margin-right: 1rem;
  }
`;
