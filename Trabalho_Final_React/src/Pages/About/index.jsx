
import { Container, Titulo, Main, TextContainer, SubTitulo } from './style';
import { PersonalCard } from './../../components/PersonalCard/index';

import Lorrane from '../../Assets/lorrane.pokemon.png.png'
import Rafael from '../../Assets/rafael.pokemon.jpg'
import Felipe from '../../Assets/felipe.pikachu.jpg'
import Miguel from '../../Assets/miguel.pokemon.jpg';
import Diego from '../../Assets/diego.pokemon.jpg'
import Ireni from '../../Assets/ireni.pokemon.jpg'

import {LinDiego, LinIreni, LinLorrane, LinMiguel, LinRafael, LinFelipe} from '../../context/Links'
import {GitDiego, GitIreni, GitLorrane, GitMiguel, GitRafael, GitFelipe} from '../../context/Links'


export const About = () => {
    return (
        <Main>
            <TextContainer>
                <Titulo>Serratex</Titulo>
                <SubTitulo>A Pokedex do Serratec com seus Pokemons Lendários</SubTitulo>
            </TextContainer>
            <Container >    
                <PersonalCard image={Rafael} titulo=" Rafael " Link={LinRafael} gitLink={GitRafael} />
                <PersonalCard image={Diego} titulo=" Diego" Link={LinDiego} gitLink={GitDiego} />
                <PersonalCard image={Miguel} titulo=" Miguel" Link={LinMiguel} gitLink={GitMiguel} />
                <PersonalCard image={Ireni} titulo="a Ireni" Link={LinIreni} gitLink={GitIreni} />
                <PersonalCard image={Lorrane} titulo="a Lorrane" Link={LinLorrane} gitLink={GitLorrane} />
                {/* <PersonalCard image={Felipe} titulo=" Felipe" Link={LinFelipe} gitLink={GitFelipe} />             */}
            </Container>
        </Main>
    )
}