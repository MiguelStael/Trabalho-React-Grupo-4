import styled from 'styled-components';
import { Link } from 'react-router'; 

export const NavButton = styled.button`
  background: ${({ $active }) => ($active ? '#8cc5ff' : 'transparent')};
  color: ${({ $active }) => ($active ? '#121c2c' : '#fff')};
  border: ${({ $active }) => ($active ? '1px solid #121c2c' : 'none')};
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 0.8;
    background: ${({ $active }) => ($active ? '#7ab4f5' : 'rgba(255,255,255,0.1)')};
  }

  @media (min-width: 768px) {
    padding: 8px 16px;
    font-size: 20px;
  }

  @media (min-width: 1024px) {
    padding: 10px 20px;
  }
`;

export const LogoLink = styled(Link)`
  display: flex; 
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 50px; 
  height: auto;
  transition: 0.5s ease;
  &:hover{
    transform: scale(1.1);
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: system-ui, -apple-system, Helvetica, Arial, sans-serif;
  background: #1A233A;
  min-height: 60px;
  padding: 0 16px;

  @media (min-width: 768px) {
    justify-content: space-around;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
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

export const MobileMenu = styled.div`
  display: block;
  cursor: pointer;
  z-index: 11;

  div {
    width: 32px;
    height: 3px;
    background: #fff;
    margin: 6px 0;
    border-radius: 2px;
    transition: all 0.3s ease;
  }

  .open:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .open:nth-child(2) {
    opacity: 0;
  }

  .open:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

export const Badge = styled.span`
  display: inline-block;
  min-width: 18px;
  height: 18px;
  padding: 0 6px;
  background: #ff4d4f;
  color: white;
  border-radius: 12px;
  font-size: 12px;
  line-height: 18px;
  text-align: center;
  margin-left: 8px;
`;