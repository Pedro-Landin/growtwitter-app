import { BlockNews, ButtonShowMore, ContainerSidebarRight } from "./styles";


export default function SidebarRight() {
    return (
        <>
            <ContainerSidebarRight>

                <h3>O que esta acontecendo</h3>

                <BlockNews>
                    <p>Esportes - Há 45 min</p>
                    <strong>Assunto sobre esportes</strong>
                </BlockNews>

                <BlockNews>
                    <p>Assunto do Momento em Brasil</p>
                    <strong>Assunto do Momento</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>

                <BlockNews>
                    <p>Música - Assunto do Momento</p>
                    <strong>Assunto sobre Música</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>

                <BlockNews>
                    <p>Política - Assunto do Momento</p>
                    <strong>Assunto sobre Política</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>

                <BlockNews>
                    <p>Cinema - Assunto do Momento</p>
                    <strong>Assunto sobre Filmes e Cinema</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>

                <ButtonShowMore>Mostrar mais</ButtonShowMore>
        
            </ContainerSidebarRight>

        </>
    )

}