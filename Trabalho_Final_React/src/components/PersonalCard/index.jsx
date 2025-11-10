import { CardContainer, ContainerImg, Descricao, Image, Titulo,
    PersonalLinks, Links, ContainerLinks
 } from "./style"

import git from '../../Assets/GitHub-PNG-HD-Quality.png'
import linkedin from '../../Assets/linkedin-logo-linkedin-icon-transparent-free-png.webp'
export const PersonalCard = ({image, titulo, Link, gitLink}) => {
    return (

    <CardContainer>
        <ContainerImg>
            <Image src={image} alt="" />
        </ContainerImg> 
        <Titulo>Um{titulo} selvagem apareceu</Titulo>
        
        
        <ContainerLinks>
            <PersonalLinks href={Link} target="blank">
                <Links src={linkedin}/> 
            </PersonalLinks>
            <PersonalLinks href={gitLink} target="blank">
                <Links src={git}/> 
            </PersonalLinks>            
        </ContainerLinks>
    </CardContainer>
    )
}