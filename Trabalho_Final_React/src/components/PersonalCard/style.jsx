import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 250px;
  min-height: 250px;
  background: #ffffff36;
  box-shadow:
    0 14px 30px rgba(0,0,0,0.65),
    0 0 28px rgba(151, 85, 255, 0.07),
    inset 0 2px 0 rgba(255,255,255,0.03),
    inset 0 -10px 30px rgba(0,0,0,0.5);
  border:  2px #fff;
  border-radius: 30px;
  border: none;
  padding: 20px;
  margin-bottom: 100px;
  box-sizing: border-box;

  @media (min-width: 768px){
    min-width: 300px;
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
    height: 150px;
    width: 150px;
    border-radius: 20px;

    @media (min-width: 1024px) {
      height: 200px;
      width: 300px;
    }
  `;

  export const Titulo = styled.h2`
    width: 200px;
    text-align: center;
    color: black;
    margin-top: 20px;
    font-size: 20px;
    font-weight: 10px;
  `;

  export const Descricao = styled.h3`
    text-align: center;
    margin-top: 50px

  `;

  export const PersonalLinks = styled.a`

    cursor: pointer;

  `;

  export const Links = styled.img`
    height: 50px;
    width: 50px;
  `;

  export const ContainerLinks = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    width: 100%;
  `;


