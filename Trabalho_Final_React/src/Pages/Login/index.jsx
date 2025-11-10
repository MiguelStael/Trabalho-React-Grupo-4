import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import * as Styled from './style.jsx';
import { useAuthContext } from '../../context/AuthUtils.jsx';
import { Navbar } from "../../components/NavBar";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

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
                const container = e.target.closest('div');
                container.style.transform = 'translateX(-100%)';
                container.style.transition = 'transform 0.70s ease-in-out';
                setTimeout(() => {
                    navigate('/home');
                }, 960);
            } else {
                setError('Chave de Acesso ou Senha Secreta inválida.');
            }
        } catch (error) {
            setError(error.message || 'Chave de Acesso ou Senha Secreta inválida.');
        }
    };

    return (
        <>
            <Navbar />
            <div>
                <Styled.LoginWrapper onSubmit={handleLogin}>
                    <Styled.LoginContainer>
                        <Styled.Title>POKECOFRE</Styled.Title>
                        <Styled.SubTitle style={{ color: '#FFFFFF' }}>
                            Autenticação de Acesso ao Cofre de Cartas Raras
                        </Styled.SubTitle>

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