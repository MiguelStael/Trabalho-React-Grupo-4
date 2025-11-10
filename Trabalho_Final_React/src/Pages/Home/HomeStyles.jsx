import styled from 'styled-components';

export const ContainerPrincipal = styled.div`
    display: flex;
    flex-direction: column;
    background: #076585;  
    background: -webkit-linear-gradient(to top, #fff, #076585);  
    background: linear-gradient(to top, #fff, #076585); 


    align-items: space-evenly;
    justify-content: center;
    min-height: calc(100vh - 60px);
    width: 100vw;
`;

export const ImagemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* position: fixed; */
  
  border-radius: 10px;
  background-size: cover;
`;

export const Imagem = styled.img`
    width: 300px;
    min-height: 250px;

    @media (min-width: 768px) {
        width: 500px;
        min-height: 350px;
    };
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
    text-align: center;
    padding: 10px;
    font-size: 1.1em;
    color: #272727;
`;