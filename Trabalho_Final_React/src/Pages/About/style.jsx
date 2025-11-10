import styled from 'styled-components'

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 100px;
  justify-items: center;
  padding: 40px;
  background: #076585;  
    background: -webkit-linear-gradient(to top, #fff, #076585);  
    background: linear-gradient(to top, #fff, #076585); 

  min-height: 100vh;
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

