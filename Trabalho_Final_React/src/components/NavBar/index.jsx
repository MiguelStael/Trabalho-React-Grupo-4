import { Link } from 'react-router'
import { Nav, NavList, MobileMenu, Logo, StyledLink } from "./Style";export const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">Loja</Logo>
      <MobileMenu>
        <div></div>
        <div></div>
        <div></div>
      </MobileMenu>
      <NavList>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/projetos">Projetos</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </NavList>
    </Nav>
  );
};