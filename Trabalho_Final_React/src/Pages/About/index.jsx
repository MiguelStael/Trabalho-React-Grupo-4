
import { Main } from './style';
import { PersonalCard } from './../../components/PersonalCard/index';
import image from '../../Assets/download.jpg'
import Rafael from '../../Assets/63e8a795-a337-407a-99a3-6310b5b8c525.jpg'

export const About = () => {
    return (
        <Main >
            <PersonalCard image={Rafael} titulo={'Um Rafael selvagem apareceu'} descricao={'Sla'}/>
            <PersonalCard image={image} titulo={'Um Diego selvagem apareceu'} descricao={'Sla'}/>
            <PersonalCard image={image} titulo={'Um Miguel selvagem apareceu'} descricao={'Sla'}/>
            <PersonalCard image={image} titulo={'Uma Ireni selvagem apareceu'} descricao={'Sla'}/>
            <PersonalCard image={image} titulo={'Uma Lorrane selvagem apareceu'} descricao={'Sla'}/>
            <PersonalCard image={image} titulo={'Uma Lorrane selvagem apareceu'} descricao={'Sla'}/>
            
            
         
        </Main>
    )
}