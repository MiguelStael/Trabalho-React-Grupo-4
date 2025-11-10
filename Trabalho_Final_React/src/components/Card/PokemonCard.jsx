import React, { useRef } from 'react';
import { Card, Img, Name, Button } from './style.jsx';
import { getColorByType } from '../../Pages/Store/Filtro.jsx';

export default function PokemonCard({ pokemon, onDetails = () => { }, onAdd = () => { } }) {
  const addButtonRef = useRef(null);
  const backgroundColor = getColorByType(pokemon.types);

  return (
    <Card backgroundColor={backgroundColor}>
      <Img src={pokemon.sprite} alt={pokemon.name} />
      <Name>{pokemon.name}</Name>
      <div style={{ fontWeight: 600 }}>R$ {Number(pokemon.price).toFixed(2)}</div>
      <div style={{ fontSize: 14, fontWeight: 600, color: '#fff', marginTop: 6, textShadow: '1px 1px 2px rgba(0,0,0,0.3)' }}>{(pokemon.types || []).join(', ')}</div>
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
