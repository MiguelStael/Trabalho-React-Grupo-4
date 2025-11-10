import { FilterContainer, FilterElement, FilterSelect } from './FiltroStyles';

const TIPOS_POKEMON = [
    'all', 'normal', 'fire', 'water', 'grass', 'electric',
    'ice', 'fighting', 'poison', 'ground', 'flying',
    'psychic', 'bug', 'rock', 'ghost', 'dragon', 'steel', 'fairy'
];

const TYPE_PRICES = {
    normal: 15.99,
    fire: 24.99,
    water: 22.99,
    grass: 20.99,
    electric: 26.99,
    ice: 18.99,
    fighting: 28.99,
    poison: 16.99,
    ground: 21.99,
    flying: 23.99,
    psychic: 27.99,
    bug: 14.99,
    rock: 19.99,
    ghost: 25.99,
    dragon: 34.99,
    steel: 29.99,
    fairy: 23.99
};

const TYPE_COLORS = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    steel: '#B8B8D0',
    fairy: '#EE99AC'
};

export const getFixedPriceFromId = (id) => {
    return +(((id % 100) + 50) / 100).toFixed(2);
};

export const getFixedPriceFromName = (name) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
    }
    return getFixedPriceFromId(Math.abs(hash) || 1);
};

export const getPriceByType = (types, id = null) => {
    if (!types || types.length === 0) return 19.99;
    const primaryType = types[0];
    let basePrice = TYPE_PRICES[primaryType] || 19.99;

    if (id) {
        const stage = (id - 1) % 3;
        const evolutionBonus = stage * 3;
        basePrice += evolutionBonus;
    }

    return +basePrice.toFixed(2);
};

export const getColorByType = (types) => {
    if (!types || types.length === 0) return '#A8A878';
    return TYPE_COLORS[types[0]] || '#A8A878';
};

const capitalizeType = (type) => type === 'all' ? 'Todos os Tipos' : type.charAt(0).toUpperCase() + type.slice(1);

const Filtro = ({ termoBusca, setTermoBusca, tipoSelecionado, setTipoSelecionado }) => (
    <FilterContainer>
        <FilterElement
            type="text"
            placeholder="🔍 Digite o nome do Pokémon..."
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
        />
        <FilterSelect
            value={tipoSelecionado}
            onChange={(e) => setTipoSelecionado(e.target.value)}
        >
            {TIPOS_POKEMON.map((tipo) => (
                <option key={tipo} value={tipo}>
                    {capitalizeType(tipo)}
                </option>
            ))}
        </FilterSelect>
    </FilterContainer>
);

export default Filtro;