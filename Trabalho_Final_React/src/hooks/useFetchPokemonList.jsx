import { useState, useEffect } from 'react';
import { getPriceByType } from '../Pages/Store/Filtro.jsx';

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

                // Fazer requisições em grupos para melhor performance
                const batchSize = 20;
                const pokemonComTipos = [];

                for (let i = 0; i < data.results.length; i += batchSize) {
                    const batch = data.results.slice(i, i + batchSize);
                    const batchResults = await Promise.all(
                        batch.map(async (pokemon) => {
                            try {
                                const detailResponse = await fetch(pokemon.url);
                                const detailData = await detailResponse.json();
                                const types = detailData.types.map(type => type.type.name);
                                const price = getPriceByType(types, detailData.id);

                                return {
                                    id: detailData.id,
                                    name: pokemon.name,
                                    url: pokemon.url,
                                    types: types,
                                    sprite: detailData.sprites?.front_default || '',
                                    price: price
                                };
                            } catch (error) {
                                console.error(`Erro ao buscar ${pokemon.name}:`, error);
                                return null;
                            }
                        })
                    );
                    pokemonComTipos.push(...batchResults.filter(p => p !== null));
                    setListaPokemon([...pokemonComTipos]); // Atualizar estado enquanto carrega
                }

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
