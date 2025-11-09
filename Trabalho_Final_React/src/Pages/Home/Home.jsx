import ashImg from '../../Assets/ash-agiota.jpeg';
import { ContainerPrincipal, Titulo, Mensagem, Separador, Imagem, ImagemContainer } from './HomeStyles'
import { StyledButton } from '../../styles/LoginStyles.jsx'
import { Link } from "react-router";

export const Home = () => {
    return (
        <>
            <ContainerPrincipal>
                <Separador />
                <ImagemContainer>
                    <Imagem src={ashImg} />
                </ImagemContainer>
                <Separador />
                <Titulo>O Ash está em crise!</Titulo>
                <Separador />
                <Mensagem>O Ash está vendendo seus pokemons e esta é a sua loja.</Mensagem>
                <Mensagem>Compre a sua Pika-chu- em promoção!!</Mensagem>
                <Link to="/store" style={{ textDecoration: "none" }}>
                    <StyledButton>Ir para a loja</StyledButton>
                </Link>
            </ContainerPrincipal>
        </>
    );
};