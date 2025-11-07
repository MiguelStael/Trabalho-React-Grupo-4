import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  min-height: 250px;
  background-color: black;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 100px;
  /* color: white; */

  @media (min-width: 768px){
    width: 250px;
    height: 350px
  }

  @media (min-width: 1024px) {
    width: 350px;
    height: 550px;
  }
`;

  export const Image = styled.img`
    height: 100px;
  `;
