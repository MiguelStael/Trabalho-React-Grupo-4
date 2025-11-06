import React, { useState } from 'react';
import Styled from './style.jsx'; 
import { useAuthContext } from '../../context/AuthContext.jsx'; 


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { login, isLoading } = useAuthContext(); 
    
    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);

        try {
            await login(username, password);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <Styled.LoginWrapper>
            <Styled.LoginContainer onSubmit={handleLogin}>
                <Styled.Title>VERIFICAR</Styled.Title>
                <Styled.SubTitle>Autenticação de Acesso ao Cofre de Cartas Raras</Styled.SubTitle>
                
                <Styled.InputGroup>
                    <Styled.StyledInput 
                        type="text"
                        placeholder="Chave de Acesso (Login)"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        $hasError={!!error} 
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

export default Login;