import { useState, useEffect } from 'react';
import {
  Nav,
  NavList,
  MobileMenu,
  StyledLink,
  Badge,
  LogoImage,
  LogoLink
} from "./style";
import { useCart } from '../../context/CartContext';
import poke from '../../Assets/pngimg.com - pokemon_PNG14.png';

// ⬇️ Componente de data e hora com formato personalizado
const DateTime = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();

      // Formatar dia da semana
      const dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
      const diaSemana = dias[now.getDay()];

      // Formatar data
      const dia = now.getDate();
      const meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
      const mes = meses[now.getMonth()];
      const ano = now.getFullYear();

      setDate(`${diaSemana}, ${dia} de ${mes} de ${ano}`);

      // Formatar hora
      const hora = now.toLocaleTimeString('pt-BR', { timeZone: 'America/Sao_Paulo' });
      setTime(`Horário de Brasília: ${hora}`);
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '14px', color: '#333', marginRight: '10px' }}>
      <span>{date}</span>
      <span>{time}</span>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const { notification, myPokemonList } = useCart();
  const totalItems = myPokemonList.reduce((s, i) => s + (i.quantity || 1), 0);

  return (
    <Nav>
      {/* ⬇️ Agrupando data/hora e logo lado a lado */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <DateTime /> {/* ⬅️ Data e hora formatadas aparecem aqui */}
        <LogoLink to="/">
          <LogoImage src={poke} alt="Logo Pokebola" />
        </LogoLink>
      </div>

      <MobileMenu onClick={toggleMenu} aria-label="Menu">
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </MobileMenu>

      <NavList $isOpen={isOpen}>
        <li><StyledLink to="/store">Loja</StyledLink></li>
        <li><StyledLink to="/about">Sobre</StyledLink></li>
        <li>
          <StyledLink to="/cart">
            Carrinho
            {totalItems > 0 && (
              <Badge
                title={
                  notification && notification.show
                    ? (notification.item
                        ? `Adicionado: ${notification.item} — total ${notification.count}`
                        : `Total: ${totalItems}`)
                    : `Total: ${totalItems}`
                }
              >
                {totalItems}
              </Badge>
            )}
          </StyledLink>
        </li>
        <li><StyledLink to="/login">Login</StyledLink></li>
      </NavList>
    </Nav>
  );
};