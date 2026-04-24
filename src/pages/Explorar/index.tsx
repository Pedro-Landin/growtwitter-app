import { BlockNews, ContainerExplorar, ExplorarHeader } from "./styles";
import { useNavigate } from "react-router";

import arrowBack from '../../assets/arrow_back.png'

export default function Explorar() {
    const navigate = useNavigate();

    return (
        <>
            <ContainerExplorar>

                <ExplorarHeader>
                    <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                        <img src={arrowBack} alt="Voltar" />
                    </button>

                    <div>
                        <h3>Explorar</h3>
                    </div>
                </ExplorarHeader>

                <BlockNews>
                    <p>Esportes</p>
                    <strong>Assunto sobre esportes</strong>
                </BlockNews>
       
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

                <BlockNews>
                    <p>Cinema - Assunto do Momento</p>
                    <strong>Assunto sobre Filmes e Cinema</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>

                <BlockNews>
                    <p>Cinema - Assunto do Momento</p>
                    <strong>Assunto sobre Filmes e Cinema</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>

                <BlockNews>
                    <p>Música - Assunto do Momento</p>
                    <strong>Assunto sobre Música</strong>
                    <p>1.111 growtweets</p>
                </BlockNews>


            </ContainerExplorar>

        </>
    )

}