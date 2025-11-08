import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as Styled from './style.jsx';
import { useAuthContext } from '../../context/AuthUtils.jsx';
import { Navbar } from "../../components/Navbar";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [zoom, setZoom] = useState(1);

    const { login, isLoading } = useAuthContext();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        if (!username || !password) {
             setError("Todos os campos devem ser preenchidos.");
             return;
        }

        try {
            const result = await login(username, password);
            if (result.success) {
                // Adicionar efeito de deslizar saindo para a esquerda
                const container = e.target.closest('div');
                container.style.transform = 'translateX(-100%)';
                container.style.transition = 'transform 0.96s ease-in-out';
                setTimeout(() => {
                    navigate('/');
                }, 960);
            } else {
                setError('Chave de Acesso ou Senha Secreta inválida.');
            }
        } catch (error) {
            setError(error.message || 'Chave de Acesso ou Senha Secreta inválida.');
        }
    };

    const ZoomControls = () => (
        <div style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 10,
            background: '#ffffffcc',
            padding: '6px',
            borderRadius: '8px',
            boxShadow: '0 0 6px #aaa'
        }}>
            <button onClick={() => setZoom(prev => Math.max(prev - 0.1, 0.5))}>–</button>
            <button onClick={() => setZoom(prev => Math.min(prev + 0.1, 2))}>+</button>
        </div>
    );

    return (
        <>
            <Navbar />
            <ZoomControls />
            <div
                style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease-in-out' }}
                onWheel={(e) => {
                    e.preventDefault();
                    setZoom(prev => Math.max(0.5, Math.min(2, prev + (e.deltaY > 0 ? -0.1 : 0.1))));
                }}
            >
                <Styled.LoginWrapper onSubmit={handleLogin}>
                    <Styled.LoginContainer>
                        <Styled.Title>POKECOFRE</Styled.Title>
                        <Styled.SubTitle style={{ color: '#FFFFFF' }}>Autenticação de Acesso ao Cofre de Cartas Raras</Styled.SubTitle>

                        <Styled.InputGroup>
                            <Styled.StyledInput
                                type="text"
                                placeholder="Chave de Acesso (Login)"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                disabled={isLoading}
                                tabIndex={1}
                            />
                        </Styled.InputGroup>

                        <Styled.InputGroup>
                            <Styled.StyledInput
                                type="password"
                                placeholder="Senha Secreta (Password)"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                $hasError={!!error}
                                disabled={isLoading}
                                tabIndex={2}
                            />
                        </Styled.InputGroup>

                        {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}

                        <Styled.StyledButton type="submit" $disabled={isLoading} tabIndex={3}>
                            {isLoading ? 'SCANNING...' : 'SCANEAR CHAVE'}
                        </Styled.StyledButton>
                    </Styled.LoginContainer>
                </Styled.LoginWrapper>
            </div>
        </>
    );
};


