import { useState, useEffect } from 'react';

export const useFetchPokemonList = (limit = 100) => {
    const [listaPokemon, setListaPokemon] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        const buscarListaPokemonCompleta = async () => {
            setEstaCarregando(true);
            try {
                const urlApi = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
                const respostaInicial = await fetch(urlApi);
                const dadosIniciais = await respostaInicial.json();
                const promessasDetalhes = dadosIniciais.results.map(async (pokemon) => {
                    const respDetalhes = await fetch(pokemon.url);
                    const dadosDetalhes = await respDetalhes.json();

                    return {
                        name: pokemon.name,
                        url: pokemon.url,
                        types: dadosDetalhes.types.map(t => t.type.name)
                    };
                });

                const listaDetalhada = await Promise.all(promessasDetalhes);

                setListaPokemon(listaDetalhada);
                setEstaCarregando(false);
            } catch (err) {
                console.error("Erro ao buscar dados da API:", err);
                setErro(err);
                setEstaCarregando(false);
            }
        };

        buscarListaPokemonCompleta();
    }, [limit]);

    return { listaPokemon, estaCarregando, erro };
};