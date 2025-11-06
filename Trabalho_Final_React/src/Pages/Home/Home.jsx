import { useState } from 'react';
import { useFetchPokemonList } from '../hooks/useFetchPokemonList';
import Filtro from '../components/Filtro';
import {
    ContainerPrincipal,
    Titulo,
    Separador,
    Mensagem,
    CardContainer,
    Card,
    CardTitle
} from './HomeStyles';

const CardSimples = ({ nome, url }) => {
    return (
        <Card>
            <CardTitle>{nome}</CardTitle>
            <small>ID: {url.split('/').slice(-2, -1)}</small>
        </Card>
    );
};

export const Home = () => {
    const { listaPokemon, estaCarregando } = useFetchPokemonList(100);
    const [termoBusca, setTermoBusca] = useState('');
    const [tipoSelecionado, setTipoSelecionado] = useState('all');

    const pokemonFiltrados = listaPokemon.filter(pokemon => {
        const matchName = pokemon.name.toLowerCase().includes(termoBusca.toLowerCase());
        const matchType =
            tipoSelecionado === 'all' ||
            pokemon.types.includes(tipoSelecionado);

        return matchName && matchType;
    });

    return (
        <ContainerPrincipal>
            <Titulo>
                📚 Catálogo Pokémon
            </Titulo>

            {/*Filtro (Passa estados e setters via props*/}
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
                        <CardSimples
                            key={pokemon.name}
                            nome={pokemon.name}
                            url={pokemon.url}
                        />
                    ))
                ) : (
                    !estaCarregando && <Mensagem>Nenhum Pokémon encontrado.</Mensagem>
                )}
            </CardContainer>
        </ContainerPrincipal>
    );
};