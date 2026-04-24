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

export function Perfil() {
    const { user } = useAuth();
    const navigate = useNavigate();

    const [myTweets, setMyTweets] = useState<Tweet[]>([]);
    const [loading, setLoading] = useState(true);

    async function loadProfileData() {
        if (user?.id) {
            try {
                const response = await TweetService.getUserTweets(user.id);
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
    }, [user?.id]);

    return (
        <ContainerPerfil>
            <PerfilHeader>
                <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                    <img src={arrowBack} alt="Voltar" />
                </button>

                <div>
                    <h3>Perfil de @{user?.username}</h3>
                    <p>{myTweets.length} tweets</p>
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