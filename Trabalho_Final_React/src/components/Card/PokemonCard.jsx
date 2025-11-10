import React, { useRef } from 'react';
import { Card, Img, Name, Button } from './style.jsx';

export default function PokemonCard({ pokemon, onDetails = () => { }, onAdd = () => { } }) {
  const addButtonRef = useRef(null);

  return (
    <Card>
      <Img src={pokemon.sprite} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <div style={{ fontWeight: 600 }}>R$ {Number(pokemon.price).toFixed(2)}</div>
      <div style={{ fontSize: 12, color: '#666', marginTop: 6 }}>{(pokemon.types || []).join(', ')}</div>
      <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
        <Button onClick={() => onDetails(pokemon)}>Detalhes</Button>
        <Button
          ref={addButtonRef}
          onClick={() => onAdd(pokemon, addButtonRef)}
        >
          Adicionar
        </Button>
      </div>
    </Card>
  );
}
