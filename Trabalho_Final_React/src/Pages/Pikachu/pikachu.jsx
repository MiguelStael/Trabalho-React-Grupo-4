import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

export default function Pikachu() {
  const [isHappy, setIsHappy] = useState(false);
  const [spark, setSpark] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  function handleClick() {
    setIsHappy(!isHappy);
    setSpark(true);

    setTimeout(() => setSpark(false), 600);
  }

  // Faz o Pikachu seguir o mouse suavemente
  useEffect(() => {
    function handleMouseMove(e) {
      setPosition({ x: e.clientX / 20, y: e.clientY / 20 });
    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Container>
      <Title>Pikachu com Choque ⚡</Title>

      <PikaWrapper
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`
        }}
      >
        <PikachuImage
          src={
            isHappy
              ? "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
              : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
          }
          isHappy={isHappy}
          onClick={handleClick}
        />

        {spark && <SparkEffect />}
      </PikaWrapper>

      <Instructions>Clique no Pikachu para ver o efeito elétrico! ⚡</Instructions>
    </Container>
  );
}

/* ---------------------- ANIMAÇÕES ---------------------- */

const pulse = keyframes`
  from { transform: scale(1); }
  to   { transform: scale(1.15); }
`;

const shake = keyframes`
  0% { transform: translate(0, 0) }
  25% { transform: translate(-10px, 5px) }
  50% { transform: translate(10px, -5px) }
  75% { transform: translate(-5px, 10px) }
  100% { transform: translate(0, 0) }
`;

const electric = keyframes`
  0% { opacity: 0; transform: scale(0.5) rotate(0deg); }
  50% { opacity: 1; transform: scale(1.2) rotate(20deg); }
  100% { opacity: 0; transform: scale(0.5) rotate(0deg); }
`;

/* ---------------------- ESTILOS ---------------------- */

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

const PikaWrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const PikachuImage = styled.img`
  width: 220px;
  cursor: pointer;
  transition: transform 0.3s ease;

  ${({ isHappy }) =>
    isHappy &&
    `
    animation: ${pulse} 0.5s infinite alternate;
  `}

  &:active {
    animation: ${shake} 0.2s;
  }
`;

const SparkEffect = styled.div`
  position: absolute;
  top: -20px;
  left: 30%;
  width: 120px;
  height: 120px;
  pointer-events: none;
  background: radial-gradient(circle, yellow 0%, transparent 70%);
  opacity: 0;
  animation: ${electric} 0.6s ease-out forwards;
  filter: blur(5px);
  mix-blend-mode: screen;
`;
