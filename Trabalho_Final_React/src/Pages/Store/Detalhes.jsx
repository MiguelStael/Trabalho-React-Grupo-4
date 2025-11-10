import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import {
    ContainerPrincipal,
    Titulo,
    Mensagem,
    Main,
    BackButton
} from './StoreStyles.jsx';
import { getFixedPriceFromId } from './Filtro.jsx';

export default function Detalhes() {
    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState(location.state || null);
    const [loading, setLoading] = useState(!location.state);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (pokemon) return;

        const fetchPokemon = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!res.ok) throw new Error('Falha ao buscar Pokémon');
                const data = await res.json();
                const derivedPrice = getFixedPriceFromId(data.id);
                setPokemon({
                    id: data.id,
                    name: data.name,
                    types: data.types.map(t => t.type.name),
                    sprite: data.sprites?.front_default || '',
                    price: derivedPrice
                });
            } catch (err) {
                setError(err.message || 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        fetchPokemon();
    }, [name, pokemon]);

    if (loading) return (
        <Main>
            <ContainerPrincipal>
                <Mensagem>Carregando detalhes...</Mensagem>
            </ContainerPrincipal>
        </Main>
    );

    if (error) return (
        <Main>
            <ContainerPrincipal>
                <Mensagem>{error}</Mensagem>
            </ContainerPrincipal>
        </Main>
    );

    if (!pokemon) return null;

    return (
        <Main>
            <ContainerPrincipal>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <BackButton onClick={() => navigate(-1)} aria-label="Voltar à loja" style={{ marginBottom: 12 }}>
                        ← Voltar
                    </BackButton>
                </div>
                <Titulo>Detalhes — {pokemon.name}</Titulo>
                <div style={{ display: 'flex', gap: 24, alignItems: 'center', justifyContent: 'center' }}>
                    <img src={pokemon.sprite} alt={pokemon.name} style={{ width: 160, height: 160 }} />
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontWeight: 700, fontSize: 20 }}>R$ {Number(pokemon.price).toFixed(2)}</div>
                        <div style={{ marginTop: 8 }}><strong>Tipos:</strong> {(pokemon.types || []).join(', ')}</div>
                    </div>
                </div>
            </ContainerPrincipal>
        </Main>
    );
}
