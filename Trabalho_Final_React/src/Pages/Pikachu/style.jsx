import { useState } from "react";
import styled, { keyframes } from "styled-components";

export default function Pikachu() {
  const [isHappy, setIsHappy] = useState(false);
  const [showSpark, setShowSpark] = useState(false); 

  function handleClick() {
    setIsHappy(!isHappy);

    setShowSpark(true);
    setTimeout(() => setShowSpark(false), 600); 
  }

  return (
    <Container>
      <Title>Pikachu Interativo ⚡</Title>

      <PikaWrapper>
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
      {showSpark && <Spark>⚡</Spark>}
      </PikaWrapper>

      <Instructions>Clique no Pikachu para deixá-lo feliz! 💛</Instructions>
    </Container>
  );
}

const pulse = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
`;

const flash = keyframes`
  0% { opacity: 0; transform: translate(-50%, -50%) scale(0.5) rotate(0deg); }
  20% { opacity: 1; transform: translate(-50%, -50%) scale(1.5) rotate(10deg); }
  40% { opacity: 0; transform: translate(-50%, -50%) scale(1.2) rotate(-10deg); }
  60% { opacity: 1; transform: translate(-50%, -50%) scale(1.3) rotate(5deg); }
  100% { opacity: 0; transform: translate(-50%, -50%) scale(1); }
`;

const Container = styled.div`
  text-align: center;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 20px;
`;

const Instructions = styled.p`
  margin-top: 15px;
  font-size: 1.2rem;
`;

const PikaWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 200px; 
  height: 200px;
`;


const PikachuImage = styled.img`
  width: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;
  z-index: 1; 

  &:hover {
    transform: scale(1.1);
  }

  ${({ isHappy }) =>
    isHappy &&
    `
      animation: ${pulse} 0.5s infinite alternate;
    `}
`;

const Spark = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); 
    
    font-size: 100px; 
    pointer-events: none; 
    z-index: 10; 
    
    color: #ffff00;
    text-shadow: 0 0 15px #ffae00, 0 0 30px orange;
    
    animation: ${flash} 0.6s ease-out forwards;
`;
