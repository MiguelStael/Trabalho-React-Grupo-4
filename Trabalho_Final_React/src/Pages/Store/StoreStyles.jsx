import styled, { keyframes } from 'styled-components';

const flyToCart = keyframes`
    0% {
        opacity: 1;
        transform: translate(0, 0) scale(1);
    }
    100% {
        opacity: 0;
        transform: translate(calc(100vw - 50px), calc(100vh - 50px)) scale(0.1);
    }
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: #076585;  
    background: -webkit-linear-gradient(to top, #fff, #076585);  
    background: linear-gradient(to top, #fff, #076585); 
`;

export const ContainerPrincipal = styled.div`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export const Titulo = styled.h1`
    margin-bottom: 20px;
`;

export const Separador = styled.hr`
    margin: 20px 0;
    border: 0;
    border-top: 1px solid #eee;
    width: 100%;
`;

export const Mensagem = styled.p`
    font-size: 1.1em;
    color: #666;
    margin-top: 30px;
`;

export const CardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;

export const Card = styled.div`
    width: 200px;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #f9f9f9;
    text-align: center;
`;

export const CardTitle = styled.h4`
    text-transform: capitalize;
    margin: 0;
    color: #333;
`;

export const BackButton = styled.button`
    background: linear-gradient(180deg, #ffffff, #f0f6ff);
    border: 1px solid #cfe0ff;
    color: #0b57a4;
    padding: 8px 14px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 700;
    box-shadow: 0 3px 8px rgba(11,87,164,0.12);
    transition: transform 0.12s ease, box-shadow 0.12s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 14px rgba(11,87,164,0.16);
    }

    &:active {
        transform: translateY(0);
        box-shadow: 0 3px 8px rgba(11,87,164,0.12);
    }
`;

export const FloatingItemDiv = styled.div`
    position: fixed;
    pointer-events: none;
    font-size: 1.5em;
    left: ${(props) => props.x}px;
    top: ${(props) => props.y}px;
    animation: ${flyToCart} 0.8s ease-in forwards;
`;