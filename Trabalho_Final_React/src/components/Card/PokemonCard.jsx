/*import React from 'react';*/
import styled from 'styled-components';

const Card = styled.div`
  width: 220px;
  border-radius: 12px;
  padding: 12px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.12);
  background: linear-gradient(180deg, rgba(255,255,255,0.95), #f8f8f8);
  display:flex;
  flex-direction:column;
  align-items:center;
`;

const Img = styled.img`
  width: 96px;
  height: 96px;
`;

const Name = styled.h4`
  text-transform:capitalize;
  margin:8px 0;
`;

const Button = styled.button`
  margin-top:auto;
  padding:8px 12px;
  border-radius:8px;
  border:none;
  cursor:pointer;
`;

export default function PokemonCard({ pokemon, onDetails, onAdd }) {
  return (
    <Card>
      <Img src={pokemon.sprite} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <div>R$ {pokemon.price}</div>
      <div style={{fontSize:12, color:'#666', marginTop:6}}>{pokemon.types.join(', ')}</div>
      <div style={{display:'flex', gap:8, marginTop:12}}>
        <Button onClick={() => onDetails(pokemon)}>Detalhes</Button>
        <Button onClick={() => onAdd(pokemon)}>Adicionar</Button>
      </div>
    </Card>
  );
}
