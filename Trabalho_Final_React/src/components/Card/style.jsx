import styled from 'styled-components';

export const Card = styled.div`
  width: 220px;
  border-radius: 5px;
  padding: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  background: linear-gradient(180deg, rgba(255,255,255,0.95), #f8f8f8);
  display:flex;
  flex-direction:column;
  align-items:center;
`;

export const Img = styled.img`
  width: 96px;
  height: 96px;
`;

export const Name = styled.h4`
  text-transform:capitalize;
  margin:8px 0;
`;

export const Button = styled.button`
  margin-top:auto;
  padding:8px 12px;
  border-radius:8px;
  border:none;
  cursor:pointer;
`;