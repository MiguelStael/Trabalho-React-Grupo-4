import styled, { keyframes } from 'styled-components';

const holoShine = keyframes`
  0% {
    box-shadow: 0 0 29px rgba(255, 255, 255, 0.9), 0 0 58px rgba(255, 255, 255, 0.54), 0 0 86px rgba(255, 255, 255, 0.27), 0 0 115px rgba(255, 255, 255, 0.09);
  }
  50% {
    box-shadow: 0 0 32px rgba(0, 0, 139, 1), 0 0 64px rgba(0, 0, 139, 0.6), 0 0 96px rgba(0, 0, 139, 0.3), 0 0 128px rgba(0, 0, 139, 0.1);
  }
  100% {
    box-shadow: 0 0 29px rgba(255, 255, 255, 0.9), 0 0 58px rgba(255, 255, 255, 0.54), 0 0 86px rgba(255, 255, 255, 0.27), 0 0 115px rgba(255, 255, 255, 0.09);
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url('/src/Assets/fundo.jpg') no-repeat center center fixed;
  background-size: cover;
`;

export const LoginContainer = styled.form`
  background: #000033;
  border: 3px solid #444;
  border-radius: 50%;
  padding: 60px;
  width: 90%;
  max-width: 500px;
  height: 500px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  animation: ${holoShine} 6s infinite ease-in-out;
  box-shadow: 0 0 32px rgba(255, 255, 255, 0.8), 0 0 64px rgba(255, 255, 255, 0.4), 0 0 96px rgba(0, 0, 139, 0.6);
`;

export const Title = styled.h1`
  font-family: 'Georgia', serif;
  font-size: 2.4em;
  color: #FFFFFF;
  margin-top: 10px;
  margin-bottom: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-align: center;

  /* Branco neon padrão */
  text-shadow: 0 0 6px #FFFFFF, 0 0 12px #FFFFFF;

  &:hover {
    /* Inversão para azul neon */
    text-shadow: 0 0 6px #00FFFF, 0 0 12px #00FFFF;
  }
`;

export const SubTitle = styled.p`
  color: #a0a0a0;
  margin-bottom: 30px;
  font-size: 0.95em;
`;

export const InputGroup = styled.div`
  margin-bottom: 25px;
  text-align: left;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-top: 5px;
  border: none;
  
  border-bottom: 2px solid ${props => (props.$hasError ? '#FF4136' : '#2ecc71')}; 
  
  background: rgba(0, 0, 0, 0.7);
  color: ${props => (props.$hasError ? '#FF4136' : '#39FF14')};
  font-size: 1.1em;
  font-family: 'Courier New', monospace;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
  
  &::placeholder {
    color: #666;
  }
  
  &:focus {
    border-bottom: 2px solid #FFD700; 
    box-shadow: 0 0 8px rgba(255, 215, 0, 0.5);
  }
`;

export const ErrorMessage = styled.p`
  color: #FF4136;
  margin-top: 10px;
  font-size: 0.9em;
  font-family: 'Georgia', serif;
  font-weight: normal;
`;

export const StyledButton = styled.button`
  width: 200px;
  padding: 12px;
  margin: 30px auto 0 auto;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  font-weight: bold;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  text-transform: uppercase;
  display: block;

  background: ${props => props.$disabled ? '#444' : '#4646e6'};
  color: white;

  box-shadow: 0 5px #2a2a8a;
  transform: translateY(0);
  transition: all 0.1s;

  &:not(:disabled):hover {
    background: #5a5ae6;
  }

  &:not(:disabled):active {
    box-shadow: 0 2px #2a2a8a;
    transform: translateY(3px);
  }
`;
