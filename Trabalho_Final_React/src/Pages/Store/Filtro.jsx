import {
    FilterContainer,
    FilterElement,
    FilterSelect
} from './FiltroStyles';

export function getFixedPriceFromId(id) {
    const cents = ((id * 2654435761) % 9500 + 9500) % 9500;
    const priceCents = cents + 500;
    const price = (priceCents / 100).toFixed(2);
    return Number(price);
}

export function getFixedPriceFromName(name) {
    let h = 0;
    for (let i = 0; i < name.length; i++) {
        h = (h << 5) - h + name.charCodeAt(i);
        h |= 0;
    }
    const idLike = Math.abs(h) || 1;
    return getFixedPriceFromId(idLike);
}

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