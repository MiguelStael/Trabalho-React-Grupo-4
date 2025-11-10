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
                const pokemonComTipos = await Promise.all(
                    data.results.map(async (pokemon) => {
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
