import { useState } from 'react';
import { Nav, NavList, MobileMenu, LogoLink, StyledLink, Badge } from "./style";
import { useCart } from '../../context/CartContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  const { notification, myPokemonList } = useCart();
  const totalItems = myPokemonList.reduce((s, i) => s + (i.quantity || 1), 0);

  return (
    <Nav>
      <LogoLink to="/">Home</LogoLink>

      <MobileMenu onClick={toggleMenu} aria-label="Menu">
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MobileMenu>

      <NavList $isOpen={isOpen}>
        <li><StyledLink to="/">Home</StyledLink></li>
        <li><StyledLink to="/login">Login</StyledLink></li>
        <li><StyledLink to="/store">Loja</StyledLink></li>
        <li><StyledLink to="/about">Sobre</StyledLink></li>
        <li>
          <StyledLink to="/cart">
            Carrinho
            {totalItems > 0 && (
              <Badge title={notification && notification.show
                ? (notification.item
                  ? `Adicionado: ${notification.item} — total ${notification.count}`
                  : `Total: ${totalItems}`)
                : `Total: ${totalItems}`}>
                {totalItems}
              </Badge>
            )}
          </StyledLink>
        </li>
      </NavList>
    </Nav>
  );
};