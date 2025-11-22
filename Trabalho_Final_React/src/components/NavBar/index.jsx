import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { Nav, NavList, MobileMenu, NavButton, Badge, LogoImage, LogoLink } from "./style";
import poke from '../../Assets/pngimg.com - pokemon_PNG14.png';
import Pikachu from './../../Pages/Pikachu/pikachu';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => setIsOpen(prev => !prev);

  const { notification, myPokemonList } = useCart();
  const totalItems = myPokemonList.reduce((s, i) => s + (i.quantity || 1), 0);

  const navigate = useNavigate();

  const handleClick = (value) => navigate(value);

  return (
    <Nav>
      <LogoLink to="/home">
        <LogoImage src={poke} alt="Logo Pokebola" />
      </LogoLink>

      <MobileMenu onClick={toggleMenu} aria-label="Menu">
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MobileMenu>

      <NavList $isOpen={isOpen}>
        <li>
          <NavButton
            onClick={() => handleClick('/store')}
            $active={location.pathname === '/store'}>
            Loja
          </NavButton>
        </li>
        <NavButton
          onClick={() => handleClick('/pikachu')}
          $active={location.pathname === '/pikachu'}>
          Pikachu
        </NavButton>
        <li>
          <NavButton
            onClick={() => handleClick('/about')}
            $active={location.pathname === '/about'}>
            Sobre
          </NavButton>
        </li>
        <li>
          <NavButton
            onClick={() => handleClick('/cart')}
            $active={location.pathname === '/cart'}>
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
          </NavButton>
        </li>
      </NavList>
    </Nav>
  );
};