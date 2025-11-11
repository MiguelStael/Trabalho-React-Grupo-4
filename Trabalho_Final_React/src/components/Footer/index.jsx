import { Container, Text } from "./style";

export function Footer() {

    return (
        <Container >
            <Text>© {new Date().getFullYear()} Loja Pokémon — Todos os direitos reservados</Text>
        </Container>
    );
}