import { useState } from 'react';
import { useFetchPokemonList } from '../../hooks/useFetchPokemonList.jsx';
import Filtro from './Filtro.jsx';
import PokemonCard from '../../components/Card/PokemonCard.jsx';
import { useCart } from '../../context/CartContext.jsx';
import {
    ContainerPrincipal,
    Titulo,
    Separador,
    Mensagem,
    CardContainer, Main
} from './StoreStyles.jsx';

export const Store = () => {
    const { listaPokemon, estaCarregando } = useFetchPokemonList(100);
    const [termoBusca, setTermoBusca] = useState('');
    const [tipoSelecionado, setTipoSelecionado] = useState('all');
    const { addPokemonToList } = useCart();

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
                            <PokemonCard
                            key={pokemon.name}
                            pokemon={pokemon}
                            onDetails={() => { }}
                            onAdd={() => addPokemonToList(pokemon)}
                            />
                        ))
                    ) : (
                        !estaCarregando && <Mensagem>Nenhum Pokémon encontrado.</Mensagem>
                    )}
                </CardContainer>
            </ContainerPrincipal>
        </Main>
    );
};