import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { TweetCard } from "../../components/TweetCard";

import TweetService from "../../services/tweet";
import UserService from "../../services/user"

import type { Tweet } from "../../types/tweet";
import {
    ContainerPerfil,
    PerfilBanner,
    PerfilButton,
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

    // Estados para a lógica de Follow
    const [isFollowing, setIsFollowing] = useState(false);
    const [loadingFollowCheck, setLoadingFollowCheck] = useState(true);

    // Verifica qual o ID do usuário que eu quero carregar
    const idToLoad = userId || loggedUser?.id;

    // Verifica qual o nome do usuário que eu quero carregar
    const profileOwner = myTweets.length > 0 ? myTweets[0].author : (idToLoad === loggedUser?.id ? loggedUser : null);

    // Verifica se estou vendo o perfil de OUTRA pessoa
    const isForeignProfile = userId && userId !== loggedUser?.id;


    // Função para checar quem eu sigo
    async function checkFollowStatus() {
        // Se eu estou vendo o perfil de OUTRA pessoa, eu não preciso checar quem eu sigo
        if (!isForeignProfile) {
            setLoadingFollowCheck(false);
            return;
        }

        try {
            const response = await UserService.getFollows();

            if (response.success) {
                const followings = response.data.followings;

                // Verifica se eu sigo o usuário
                const alreadyFollowing = followings.some((followedUser: any) =>
                    followedUser.id === userId
                );

                setIsFollowing(alreadyFollowing);
            }
        } catch (error) {
            console.error("Erro ao checar seguidores", error);
        } finally {
            setLoadingFollowCheck(false);
        }
    }

    // Função para carregar os tweets
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

    // Funcão para seguir ou deixar de seguir
    async function handleFollowToggle() {
        if (!userId) return;

        try {
            setLoadingFollowCheck(true); // Bloqueia o botão

            if (isFollowing) {
                // Se estou seguindo, eu quero deixar de seguir
                const response = await UserService.userUnFollow(userId);
                if (response.success) {
                    setIsFollowing(false);
                }
            } else {
                // Se não seguir, eu quero seguir
                const response = await UserService.userFollow(userId);
                if (response.success) {
                    setIsFollowing(true);
                }
            }
        } catch (error) {
            console.error("Erro ao processar follow/unfollow", error);
            alert("Não foi possível completar a ação. Tente novamente.");
        } finally {
            setLoadingFollowCheck(false);
        }
    }

    useEffect(() => {
        // Carrega os tweets
        loadProfileData();

        // Checa quem eu sigo
        checkFollowStatus();
    }, [userId]);

    return (
        <ContainerPerfil>
            <PerfilHeader>
                <button onClick={() => navigate(-1)} style={{ cursor: 'pointer', border: 'none', background: 'none' }}>
                    <img src={arrowBack} alt="Voltar" />
                </button>

                <div>
                    <h3>Perfil de @{profileOwner?.username}</h3>
                    <p>{myTweets.length} tweets</p>
                </div>
            </PerfilHeader>

            <PerfilBanner>
                <img src={profileOwner?.imageUrl || image_perfil} alt={profileOwner?.name} />
            </PerfilBanner>

            <PerfilInfo>
                <strong>{profileOwner?.name}</strong>
                <span>@{profileOwner?.username}</span>

                {/* Botão para seguir ou deixar de seguir */}
                {isForeignProfile && !loadingFollowCheck && (
                    <div>
                        {isFollowing ? (
                            <PerfilButton onClick={handleFollowToggle}
                                disabled={loadingFollowCheck}>Unfollow</PerfilButton>
                        ) : (
                            <PerfilButton onClick={handleFollowToggle}
                                disabled={loadingFollowCheck}>Follow</PerfilButton>
                        )}
                    </div>
                )}
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