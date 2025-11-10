
import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router';
import { ContainerPrincipal, Titulo, Mensagem, Main, BackButton } from './StoreStyles.jsx';
import { getPriceByType } from './Filtro.jsx';


export default function Detalhes() {
    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [state, setState] = useState({
        loading: !location.state,
        error: null,
        pokemon: location.state || null
    });

    useEffect(() => {
        if (state.pokemon) return;
        (async () => {
            try {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!res.ok) throw new Error('Falha ao buscar Pokémon');
                const data = await res.json();
                const types = data.types.map(t => t.type.name);
                setState({
                    loading: false,
                    error: null,
                    pokemon: {
                        id: data.id,
                        name: data.name,
                        types: types,
                        sprite: data.sprites?.front_default || '',
                        price: getPriceByType(types, data.id)
                    }
                });
            } catch (err) {
                setState({ loading: false, error: err.message || 'Erro desconhecido', pokemon: null });
            }
        })();
    }, [name, state.pokemon]);

    const { loading, error, pokemon } = state;

    return (
        <Main>
            <ContainerPrincipal>
                {loading ? (
                    <Mensagem>Carregando detalhes...</Mensagem>
                ) : error ? (
                    <Mensagem>{error}</Mensagem>
                ) : pokemon ? (
                    <>
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
                    </>
                ) : null}
            </ContainerPrincipal>
        </Main>
    );
}
