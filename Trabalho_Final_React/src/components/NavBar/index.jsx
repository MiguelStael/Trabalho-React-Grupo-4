import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useLocation } from 'react-router-dom';
import { Nav, NavList, MobileMenu, StyledLink, Badge, LogoImage, LogoLink } from "./style";
import poke from '../../Assets/pngimg.com - pokemon_PNG14.png';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(prev => !prev);

  const { notification, myPokemonList } = useCart();
  const totalItems = myPokemonList.reduce((s, i) => s + (i.quantity || 1), 0);

  return (
    <Nav>
      <LogoLink to="/home">
        <LogoImage src={poke} alt="Logo Pokebola" />
      </LogoLink>

      <MobileMenu onClick={toggleMenu} aria-label="Menu">
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MobileMenu>

      <NavList $isOpen={isOpen}>
        <li><StyledLink to="/store" $active={location.pathname === '/store'}>Loja</StyledLink></li>
        <li><StyledLink to="/about" $active={location.pathname === '/about'}>Sobre</StyledLink></li>
        <li>
          <StyledLink to="/cart" $active={location.pathname === '/cart'}>
            Carrinho
            {totalItems > 0 && (
              <Badge
                title={
                  notification && notification.show
                    ? notification.item
                      ? `Adicionado: ${notification.item} — total ${notification.count}`
                      : `Total: ${totalItems}`
                    : `Total: ${totalItems}`
                }
              >
                {totalItems}
              </Badge>
            )}
          </StyledLink>
        </li>
     
      </NavList>
    </Nav>
  );
};