import {
    FilterContainer,
    FilterElement,
    FilterSelect
} from './FiltroStyles';

const TIPOS_POKEMON = [
    'all', 'normal', 'fire', 'water', 'grass', 'electric',
    'ice', 'fighting', 'poison', 'ground', 'flying',
    'psychic', 'bug', 'rock', 'ghost', 'dragon', 'steel', 'fairy'
];

const Filtro = ({
    termoBusca,
    setTermoBusca,
    tipoSelecionado,
    setTipoSelecionado
}) => {
    return (
        <FilterContainer>
            { }
            <FilterElement
                type="text"
                placeholder="🔍 Digite o nome do Pokémon..."
                value={termoBusca}
                onChange={(e) => setTermoBusca(e.target.value)}
            />

            { }
            <FilterSelect
                value={tipoSelecionado}
                onChange={(e) => setTipoSelecionado(e.target.value)}
            >
                {TIPOS_POKEMON.map(tipo => (
                    <option key={tipo} value={tipo}>
                        {tipo === 'all' ? 'Todos os Tipos' : tipo.charAt(0).toUpperCase() + tipo.slice(1)}
                    </option>
                ))}
            </FilterSelect>
        </FilterContainer>
    );
};

export default Filtro;