import { useLocation } from "react-router";
import { Container, Text } from "./style";

export function Footer() {

    // const location = useLocation() 
    // if (location.pathname === "/login" || location.pathname === "/") return null
    return (
        <Container >
            <Text>© {new Date().getFullYear()} Loja Pokémon — Todos os direitos reservados</Text>
        </Container>
    );
}