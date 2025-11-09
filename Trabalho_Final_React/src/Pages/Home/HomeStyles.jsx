import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
    justify-content: center;
    height: calc(100vh-60px);
    width: 100vw;
`;

export const ImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  border-radius: 10px;
  background-size: cover;
`;

export const Imagem = styled.img`
    width: 600px;
    min-height: 336px;
`;

export const Titulo = styled.h1`
    display: flex;
    justify-content: center;
`;

export const Separador = styled.div`
    padding: 20px 0;
    width: 100%;
`;

export const Mensagem = styled.p`
    display: flex;
    justify-content: center;
    font-size: 1.1em;
    color: #666;
`;