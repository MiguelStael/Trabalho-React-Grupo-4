import { useState, useEffect } from 'react';

export const useFetchPokemonList = (limit = 100) => {
    const [listaPokemon, setListaPokemon] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const fetchPokemon = async () => {
            try {
                setEstaCarregando(true);
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
                if (!response.ok) {
                    throw new Error('Erro ao buscar Pokémon');
                }
                const data = await response.json();

                // Para cada Pokémon, buscar detalhes para obter tipos
                const pokemonComTipos = await Promise.all(
                    data.results.map(async (pokemon) => {
                        const detailResponse = await fetch(pokemon.url);
                        const detailData = await detailResponse.json();
                        return {
                            name: pokemon.name,
                            url: pokemon.url,
                            types: detailData.types.map(type => type.type.name)
                        };
                    })
                );

                setListaPokemon(pokemonComTipos);
            } catch (error) {
                setErro(error.message);
            } finally {
                setEstaCarregando(false);
            }
        };

        fetchPokemon();
    }, [limit]);

    return { listaPokemon, estaCarregando, erro };
};
