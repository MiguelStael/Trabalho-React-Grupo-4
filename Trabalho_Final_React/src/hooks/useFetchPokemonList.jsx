import { useState, useEffect } from 'react';
import { getFixedPriceFromId, getFixedPriceFromName } from '../Pages/Store/Filtro.jsx';

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
                        const derivedPrice = detailData.id
                            ? getFixedPriceFromId(detailData.id)
                            : getFixedPriceFromName(pokemon.name);

                        return {
                            id: detailData.id,
                            name: pokemon.name,
                            url: pokemon.url,
                            types: detailData.types.map(type => type.type.name),
                            sprite: detailData.sprites?.front_default || '',
                            price: derivedPrice
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
