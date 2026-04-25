import { useAuth } from "../../hooks/useAuth";
import { useLike } from "../../hooks/useLike";

import type { Tweet } from "../../types/tweet";

import { formatDate } from "../../utils/formatDate";
import {
    ContainerReplyCard,
    InfoTweetCard,
    TweetCardRow,
    TweetLinkReplie,
} from "./styles";

import icon_Like from "../../assets/icon_Like.png";
import icon_curtir_selecionado from "../../assets/icone_curtir_selecionado.svg";
import icon_Delete from "../../assets/icon_delete.png";
import TweetService from "../../services/tweet";

interface ReplyCardProps {
    reply: Tweet;
    onDeleteSuccess?: () => void;
}

export function ReplyCard({ reply, onDeleteSuccess }: ReplyCardProps) {
    const { user } = useAuth();

    // chama o hook useLike
    const { isLiked, likesCount, handleLikeToggle } = useLike(
        reply.id,
        Array.isArray(reply.likes) ? reply.likes : []
    );

    // Verifica se o usuário atual é o autor do tweet
    const isMyReply = reply.author.id === user?.id;

    async function handleDelete() {
        const confirmDelete = window.confirm("Tem certeza que deseja excluir o comentário?");
        if (confirmDelete) {
            const response = await TweetService.deleteTweet(reply.id);
            if (response.success && onDeleteSuccess) {
                onDeleteSuccess();
            }
        }
    }

    return (
        <ContainerReplyCard
        >
            <img
                src={reply.author.imageUrl}
                alt={reply.author.name}
            />

            <InfoTweetCard>
                <TweetCardRow>
                    <strong>{reply.author.name}</strong>
                    <span className="username">@{reply.author.username}</span>
                    <span className="dot">•</span>
                    <span className="time">{formatDate(reply.createdAt)}</span>
                </TweetCardRow>

                <p style={{ fontSize: "14px" }}>{reply.content}</p>

                <TweetCardRow>
                    <TweetLinkReplie
                        onClick={handleLikeToggle}
                        style={{ cursor: "pointer" }}
                    >
                        <img
                            src={isLiked ? icon_curtir_selecionado : icon_Like}
                            alt="Likes"
                        />
                        <span
                            style={{
                                color: isLiked ? "#ed1c24" : "inherit",
                                fontWeight: isLiked ? "bold" : "normal",
                            }}
                        >
                            {likesCount}
                        </span>
                    </TweetLinkReplie>

                    {isMyReply && (
                        <TweetLinkReplie onClick={handleDelete} style={{ cursor: "pointer" }}>
                            <img src={icon_Delete} alt="Delete" />
                        </TweetLinkReplie>
                    )}

                </TweetCardRow>
            </InfoTweetCard>
        </ContainerReplyCard>
    );
}