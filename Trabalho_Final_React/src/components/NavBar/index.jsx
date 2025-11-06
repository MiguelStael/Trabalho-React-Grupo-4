import { Link } from 'react-router-dom'
import { useState } from 'react';
import { Nav, NavList, MobileMenu, Logo, StyledLink } from "./style";export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Nav>
      <Logo to="/">Loja</Logo>
       <MobileMenu onClick={toggleMenu} aria-label="Menu">
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MobileMenu> 

      <NavList $isOpen={isOpen}>
        <li><StyledLink to="/">Início</StyledLink></li>
        <li><StyledLink to="/login">Sobre</StyledLink></li>
        <li><StyledLink to="/projetos">Projetos</StyledLink></li>
        <li><StyledLink to="/contato">Contato</StyledLink></li>
      </NavList>
    </Nav>
  );
};