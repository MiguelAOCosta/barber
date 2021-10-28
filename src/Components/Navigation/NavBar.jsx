import React from "react";
import {
  NavbarContainer,
  NavbarContent,
  Logo,
  Menu,
  Option,
} from "./NavBarStyles";

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarContent>
        <Logo>Barbudo</Logo>
        <Menu>
          <Option>Galeria</Option>
          <Option>Contacto</Option>
        </Menu>
      </NavbarContent>
    </NavbarContainer>
  );
};

export default Navbar;
