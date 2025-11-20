import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Pikachu() {
  const [isHappy, setIsHappy] = useState(false);

  function handleClick() {
    setIsHappy(!isHappy);
  }

  return (
    <Container>
      <Title>Pikachu Interativo ⚡</Title>

      <PikachuImage
        src={
          isHappy
            ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
            : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        }
        alt="pikachu"
        onClick={handleClick}
        isHappy={isHappy}
      />

      <Instructions>Clique no Pikachu para deixá-lo feliz! 💛</Instructions>
    </Container>
  );
}

/* ANIMAÇÃO */
const pulse = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Instructions = styled.p`
  margin-top: 15px;
  font-size: 1.2rem;
`;

/* IMAGEM DO PIKACHU */
const PikachuImage = styled.img`
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  ${({ isHappy }) =>
    isHappy &&
    `
      animation: ${pulse} 0.5s infinite alternate;
    `}
`;
