import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { TweetCard } from "../../components/TweetCard";
import TweetService from "../../services/tweet";
import type { Tweet } from "../../types/tweet";
import {
    ContainerPerfil,
    PerfilBanner,
    PerfilHeader,
    PerfilInfo,
    PerfilTweets
} from "./styles";

import arrowBack from '../../assets/arrow_back.png'
import image_perfil from '../../assets/image_perfil.png'

import { useParams } from "react-router";

export function Perfil() {
    const { userId } = useParams();
    const { user: loggedUser } = useAuth();
    const navigate = useNavigate();

    const [myTweets, setMyTweets] = useState<Tweet[]>([]);
    const [loading, setLoading] = useState(true);

    // Verifica qual o ID do usuário que eu quero carregar'
    // Se for o ID do usuário logado, carrega os tweets dele
    const idToLoad = userId || loggedUser?.id;

    // Verifica qual o nome do usuário que eu quero carregar
    const profileOwner = myTweets.length > 0 ? myTweets[0].author : (idToLoad === loggedUser?.id ? loggedUser : null);

    async function loadProfileData() {
        if (idToLoad) {
            try {
                const response = await TweetService.getUserTweets(idToLoad);
                if (response.success) {
                    setMyTweets(response.data);
                }
            } catch (error) {
                console.error("Erro ao carregar perfil", error);
            } finally {
                setLoading(false);
            }
        }
    }

    useEffect(() => {
        loadProfileData();
    }, [idToLoad]);

    return (
        <ContainerPerfil>
            <PerfilHeader>
                <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                    <img src={arrowBack} alt="Voltar" />
                </button>

                <div>
                    <h3>Perfil de @{profileOwner ?.username}</h3>
                    <p>{myTweets.length} tweets</p>
                </div>
            </PerfilHeader>

            <PerfilBanner>
                <img src={profileOwner ?.imageUrl || image_perfil} alt={profileOwner ?.name} />
            </PerfilBanner>

            <PerfilInfo>
                <strong>{profileOwner?.name}</strong>
                <span>@{profileOwner ?.username}</span>
            </PerfilInfo>

            <PerfilTweets>
                {loading ? (
                    <p style={{ padding: '20px', textAlign: 'center' }}>Carregando seus tweets...</p>
                ) : (
                    myTweets.length > 0 ? (
                        myTweets.map((tweet) => (
                            <TweetCard key={tweet.id} tweet={tweet} onDeleteSuccess={loadProfileData} />
                        ))
                    ) : (
                        <p style={{ padding: '20px', textAlign: 'center' }}>Você ainda não possui tweets.</p>
                    )
                )}
            </PerfilTweets>
        </ContainerPerfil>
    );
}