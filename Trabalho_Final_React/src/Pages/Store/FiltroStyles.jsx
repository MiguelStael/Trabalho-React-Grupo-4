import styled from 'styled-components';

export const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 10px;
    flex-wrap: wrap;
`;

export const FilterElement = styled.input`
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    width: 250px;
    transition: border-color 0.2s;
    
    &:focus {
        border-color: #007bff;
        outline: none;
    }
`;

export const FilterSelect = styled.select`
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    border: 1px solid #ccc;
    min-width: 180px;
    cursor: pointer;
`;