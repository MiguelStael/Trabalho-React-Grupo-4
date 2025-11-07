
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
