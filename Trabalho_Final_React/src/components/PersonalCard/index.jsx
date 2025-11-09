import { CardContainer, ContainerImg, Descricao, Image, Titulo } from "./style"

export const PersonalCard = ({image, titulo, descricao}) => {
    return (

    <CardContainer>
        <ContainerImg>
            <Image src={image} alt="" />
        </ContainerImg> 
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>       
    </CardContainer>
    )
}