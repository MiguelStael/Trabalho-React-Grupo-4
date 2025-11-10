import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useFetchPokemonList } from '../../hooks/useFetchPokemonList.jsx';
import Filtro from './Filtro.jsx';
import PokemonCard from '../../components/Card/PokemonCard.jsx';
import { useCart } from '../../context/CartContext.jsx';
import {
    ContainerPrincipal,
    Titulo,
    Separador,
    Mensagem,
    CardContainer, Main,
    FloatingItemDiv
} from './StoreStyles.jsx';

export const Store = () => {
    const { listaPokemon, estaCarregando } = useFetchPokemonList(100);
    const [termoBusca, setTermoBusca] = useState('');
    const [tipoSelecionado, setTipoSelecionado] = useState('all');
    const [floatingItems, setFloatingItems] = useState([]);
    const { addPokemonToList } = useCart();
    const navigate = useNavigate();

    const handleAddPokemon = (pokemon, buttonRef) => {
        if (buttonRef && buttonRef.current) {
            const rect = buttonRef.current.getBoundingClientRect();
            const itemId = Date.now();

            setFloatingItems((prev) => [
                ...prev,
                { id: itemId, x: rect.left, y: rect.top },
            ]);

            setTimeout(() => {
                setFloatingItems((prev) => prev.filter((item) => item.id !== itemId));
            }, 800);
        }

        addPokemonToList(pokemon);
    };

    const pokemonFiltrados = listaPokemon.filter(pokemon => {
        const matchName = pokemon.name.toLowerCase().includes(termoBusca.toLowerCase());
        const matchType =
            tipoSelecionado === 'all' ||
            (pokemon.types || []).includes(tipoSelecionado);

        return matchName && matchType;
    });

    return (
        <Main>
            <ContainerPrincipal>
                <Titulo>
                    📚 Catálogo Pokémon
                </Titulo>

                <Filtro
                    termoBusca={termoBusca}
                    setTermoBusca={setTermoBusca}
                    tipoSelecionado={tipoSelecionado}
                    setTipoSelecionado={setTipoSelecionado}
                />

                <Separador />

                {estaCarregando && <Mensagem>Carregando dados, aguarde...</Mensagem>}

                <CardContainer>
                    {!estaCarregando && pokemonFiltrados.length > 0 ? (
                        pokemonFiltrados.map((pokemon) => (
                            <div key={pokemon.name} style={{ position: 'relative' }}>
                                <PokemonCard
                                    pokemon={pokemon}
                                    onDetails={(p) => navigate(`/store/${p.name}`, { state: p })}
                                    onAdd={(p, ref) => handleAddPokemon(p, ref)}
                                />
                            </div>
                        ))
                    ) : (
                        !estaCarregando && <Mensagem>Nenhum Pokémon encontrado.</Mensagem>
                    )}
                </CardContainer>

                {floatingItems.map((item) => (
                    <FloatingItemDiv key={item.id} x={item.x} y={item.y}>
                        🛒
                    </FloatingItemDiv>
                ))}
            </ContainerPrincipal>
        </Main>
    );
};