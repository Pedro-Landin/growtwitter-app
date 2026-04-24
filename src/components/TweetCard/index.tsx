import { useAuth } from "../../hooks/useAuth";
import TweetService from "../../services/tweet";
import type { Tweet } from "../../types/tweet";
import { formatDate } from "../../utils/formatDate";
import { ContainerTweetCard, InfoTweetCard, TweetCardRow, TweetLinkReplie } from "./styles";

import icon_Like from '../../assets/icon_Like.png'
import icon_Replie from '../../assets/icon_Replie.png'
import icon_Delete from '../../assets/icon_delete.png'

import { useNavigate } from "react-router";

interface TweetCardProps {
    tweet: Tweet;
    onDeleteSuccess?: () => void; // Função para ser chamada quando o tweet for excluído
}

export function TweetCard({ tweet, onDeleteSuccess }: TweetCardProps) {
    const navigate = useNavigate();
    const { user } = useAuth();

    // Verifica se o tweet pertence ao usuário logado
    const isMyTweet = tweet.author.id === user?.id;

    // Função para navegar para o perfil do autor
    function handleGoToProfile() {
        navigate(`/profile/${tweet.author.id}`);
    }

    async function handleDelete() {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir o tweet?");

        if (confirmDelete) {
            const response = await TweetService.deleteTweet(tweet.id);
            if (response.success && onDeleteSuccess) {
                onDeleteSuccess();
            }
        }
    }

    return (
        <ContainerTweetCard>
            <img onClick={handleGoToProfile} style={{ cursor: 'pointer' }} src={tweet.author.imageUrl} alt={tweet.author.name} />

            <InfoTweetCard>
                <TweetCardRow>
                    <strong onClick={handleGoToProfile} style={{ cursor: 'pointer' }}>{tweet.author.name}</strong>
                    <span  className="username">@{tweet.author.username}</span>
                    <span className="dot">•</span>
                    <span className="time">{formatDate(tweet.createdAt)}</span>
                </TweetCardRow>

                <p>{tweet.content}</p>

                <TweetCardRow>
                    <TweetLinkReplie>
                        <img src={icon_Replie} alt="Replies" />
                        <span>{tweet.replies.length}</span>
                    </TweetLinkReplie>

                    <TweetLinkReplie>
                        <img src={icon_Like} alt="Likes" />
                        <span>{Array.isArray(tweet.likes) ? tweet.likes.length : tweet.likes}</span>
                    </TweetLinkReplie>

                    {/* Renderização Condicional da Lixeira */}
                    {isMyTweet && (
                        <TweetLinkReplie onClick={handleDelete} style={{ cursor: 'pointer' }}>
                            <img src={icon_Delete} alt="Delete" />
                            {/* <span>Excluir</span> */}
                        </TweetLinkReplie>
                    )}

                </TweetCardRow>
            </InfoTweetCard>
        </ContainerTweetCard>
    );
}