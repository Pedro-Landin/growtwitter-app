import { useNavigate } from "react-router"; // ou 'react-router-dom'
import { useAuth } from "../../hooks/useAuth";
import { ContainerPerfil, PerfilBanner, PerfilHeader, PerfilInfo, PerfilTweets } from "./styles";

import arrowBack from '../../assets/arrow_back.png'
import image_perfil from '../../assets/image_perfil.png'

export function Perfil() {
    const { user } = useAuth();
    const navigate = useNavigate(); // Inicializa o hook

    return (
        <ContainerPerfil>
            <PerfilHeader>
                {/* Botão de voltar */}
                <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                  <img src={arrowBack} alt="Voltar" />
                </button>
                
                <div>
                    <h3>Perfil de @{user?.username}</h3>
                    <p>7 tweets</p>
                </div>
            </PerfilHeader>

            <PerfilBanner>
                <img src={user?.imageUrl || image_perfil} alt={user?.name} />
            </PerfilBanner>

            <PerfilInfo>
                <strong>{user?.name}</strong>
                <span>@{user?.username}</span>
            </PerfilInfo>

            <PerfilTweets>
                <div>Tweet Card</div>
            </PerfilTweets>
        </ContainerPerfil>
    );
}