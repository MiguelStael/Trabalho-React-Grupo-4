import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 200px;
  min-height: 250px;
  background-color: #ffffffa4;
  border-radius: 30px;
  border: none;
  padding: 20px;
  margin-bottom: 100px;
  box-sizing: border-box;

  @media (min-width: 768px){
    width: 250px;
    height: 350px
  }

  @media (min-width: 1024px) {
    height: 400px;
    min-width: 400px;
  }
`;

  export const ContainerImg = styled.div`
    display: flex;
    margin-top: 10px 
  `;

  export const Image = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 20px;
  `;

  export const Titulo = styled.h2`
    text-align: center;
    color: black;
    margin-top: 20px;
  `;

  export const Descricao = styled.h3`
    text-align: center;
    margin-top: 50px

  `;


