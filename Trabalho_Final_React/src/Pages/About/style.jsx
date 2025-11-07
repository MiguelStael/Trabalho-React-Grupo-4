import styled from 'styled-components'

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr; 
  gap: 100px;
  justify-items: center;
  padding: 40px;
  background-color: #4646e6;
  min-height: calc(100vh - 60px);

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

