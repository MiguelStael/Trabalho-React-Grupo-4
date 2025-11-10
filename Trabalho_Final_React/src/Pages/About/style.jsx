import styled from 'styled-components'

export const Main = styled.div`
  min-height: 100vh;
  background: #076585;  
  background: -webkit-linear-gradient(to top, #fff, #076585);  
  background: linear-gradient(to top, #fff, #076585); 

`;

export const Container = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr; 
  gap: 100px;
  justify-items: center;
  padding: 40px;
  padding-top: 80px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr)
  }

`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 150px;

  padding: 20px;
  gap: 20px;
`;

export const Titulo = styled.h1`
  text-align: center;
  color: #fff;
  font-size: 50px;
`;

export const SubTitulo = styled.h4`
  text-align: center;
  flex-wrap: wrap;
  color: #fff;
`;

