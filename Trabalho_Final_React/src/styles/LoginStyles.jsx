import styled, { keyframes } from 'styled-components';

const holoShine = keyframes`
  0% {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.5);
  }
  50% {
    box-shadow: 0 0 25px rgba(255, 215, 0, 0.7), 0 0 50px rgba(255, 215, 0, 0.3);
  }
  100% {
    box-shadow: 0 0 15px rgba(255, 215, 0, 0.1), 0 0 5px rgba(0, 0, 0, 0.5);
  }
`;

export const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #0d0d0d; 
`;

export const LoginContainer = styled.form`
  background: #1e1e1e;
  border: 3px solid #444;
  border-radius: 10px;
  padding: 40px;
  width: 90%;
  max-width: 400px;
  text-align: center;
  
  animation: ${holoShine} 6s infinite ease-in-out; 
`;

export const Title = styled.h1`
  font-family: 'Georgia', serif;
  color: #FFF;
  margin-bottom: 5px;
  letter-spacing: 2px;
  text-transform: uppercase;
  
  text-shadow: 
    0 0 8px rgba(255, 215, 0, 0.7), 
    1px 1px 3px rgba(0, 0, 0, 0.8);
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
  font-weight: bold;
`;

export const StyledButton = styled.button`
  width: 100%;
  padding: 15px;
  margin-top: 30px;
  border: none;
  border-radius: 5px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: ${props => props.$disabled ? 'not-allowed' : 'pointer'};
  text-transform: uppercase;
  
  background: ${props => props.$disabled ? '#444' : '#DC143C'}; 
  color: white;
  
  box-shadow: 0 5px #990e2b; 
  transform: translateY(0);
  transition: all 0.1s;

  &:not(:disabled):hover {
    background: #FF4500;
  }

  &:not(:disabled):active {
    box-shadow: 0 2px #990e2b;
    transform: translateY(3px);
  }
`;