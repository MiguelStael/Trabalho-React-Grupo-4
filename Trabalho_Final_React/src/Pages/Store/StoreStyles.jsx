import styled from 'styled-components';

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

export const Card = styled.div` // <-- Importado e usado no CardSimples
    width: 200px;
    margin: 10px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    background-color: #f9f9f9;
    text-align: center;
`;

export const CardTitle = styled.h4` // <-- Importado e usado no CardSimples
    text-transform: capitalize;
    margin: 0;
    color: #333;
`;