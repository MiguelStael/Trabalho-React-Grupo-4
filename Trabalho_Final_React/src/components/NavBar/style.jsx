import styled from 'styled-components';
import { Link } from 'react-router-dom';

// // Links gerais
export const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: 0.3s;

  &:hover {
    opacity: 0.7;
    color: gold;
  }
`;

// Logo
export const Logo = styled(StyledLink)`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
`;

// Nav principal
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
  background: #23232e;
  height: 60px;
  padding: 0 16px;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

// Lista de navegação
export const NavList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  top: 60px;
  right: 0;
  background: #23232e;
  width: 200px;
  padding: 16px;
  border-radius: 8px;

  li {
    letter-spacing: 2px;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    background: none;
    padding: 0;
    gap: 32px;

    li {
      margin-left: 32px;
    }
  }
`;

// Menu mobile (hamburger)
export const MobileMenu = styled.div`
  display: block;
  cursor: pointer;

  div {
    width: 32px;
    height: 2px;
    background: #fff;
    margin: 6px 0;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;