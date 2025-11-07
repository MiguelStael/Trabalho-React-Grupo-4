import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Styled from './style.jsx'; 
import { useAuthContext } from '../../context/AuthUtils.jsx';
const Login = () => {
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
                navigate('/');
            }
        } catch (error) {
            setError(error.message || 'Chave de Acesso ou Senha Secreta inválida.');
        }
    };

    return (
        <Styled.LoginWrapper onSubmit={handleLogin}>
            <Styled.LoginContainer>
                <Styled.Title>VERIFICAR</Styled.Title>
                <Styled.SubTitle>Autenticação de Acesso ao Cofre de Cartas Raras</Styled.SubTitle>
                
                <Styled.InputGroup>
                    <Styled.StyledInput 
                        type="text"
                        placeholder="Chave de Acesso (Login)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        disabled={isLoading}
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
                    />
                </Styled.InputGroup>

                {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
                
                <Styled.StyledButton type="submit" $disabled={isLoading}>
                    {isLoading ? 'SCANNING...' : 'AUTENTICAR CHAVE'}
                </Styled.StyledButton>
            </Styled.LoginContainer>
        </Styled.LoginWrapper>
    );
};


