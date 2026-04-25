import { useState } from "react";

import { useAuth } from "../../hooks/useAuth";
import { useLike } from "../../hooks/useLike";

import TweetService from "../../services/tweet";
import type { Tweet } from "../../types/tweet";
import { formatDate } from "../../utils/formatDate";

import {
    ContainerTweetCard,
    InfoTweetCard,
    TweetCardRow,
    TweetLinkReplie,
} from "./styles";

import icon_Replie from "../../assets/icon_Replie.png";
import icon_Delete from "../../assets/icon_delete.png";
import icon_Like from "../../assets/icon_Like.png";
import icon_curtir_selecionado from "../../assets/icone_curtir_selecionado.svg";

import { useNavigate } from "react-router";
import { ModalTweet } from "../ModalTweet";
import { ReplyCard } from "../ReplyCard";

interface TweetCardProps {
    tweet: Tweet;
    onDeleteSuccess?: () => void;
}

export function TweetCard({ tweet, onDeleteSuccess }: TweetCardProps) {
    const navigate = useNavigate();
    const { user } = useAuth();

    const [isReplyModalOpen, setIsReplyModalOpen] = useState(false);
    const [replies, setReplies] = useState(tweet.replies);

    // chama o hook useLike
    const { isLiked, likesCount, handleLikeToggle } = useLike(
        tweet.id,
        Array.isArray(tweet.likes) ? tweet.likes : []
    );

    // Verifica se o usuário atual é o autor do tweet
    const isMyTweet = tweet.author.id === user?.id;


    // remove o reply deletado da lista local de replies
    // e atualiza o state
    function handleReplyDeleted(replyId: string) {
        setReplies(prev => prev.filter(r => r.id !== replyId));
    }

    function handleGoToProfile() {
        navigate(`/profile/${tweet.author.id}`);
    }

    async function handleDelete() {
        const confirmDelete = window.confirm(
            "Tem certeza que deseja excluir o tweet?"
        );

        if (confirmDelete) {
            const response = await TweetService.deleteTweet(tweet.id);
            if (response.success && onDeleteSuccess) {
                onDeleteSuccess();
            }
        }
    }

    return (
        <>
            <ContainerTweetCard>
                <TweetCardRow>
                    <img
                        onClick={handleGoToProfile}
                        style={{ cursor: "pointer" }}
                        src={tweet.author.imageUrl}
                        alt={tweet.author.name}
                    />

                    <InfoTweetCard>
                        <TweetCardRow>
                            <strong
                                onClick={handleGoToProfile}
                                style={{ cursor: "pointer" }}
                            >
                                {tweet.author.name}
                            </strong>
                            <span className="username">
                                @{tweet.author.username}
                            </span>
                            <span className="dot">•</span>
                            <span className="time">
                                {formatDate(tweet.createdAt)}
                            </span>
                        </TweetCardRow>

                        <p>{tweet.content}</p>

                        <TweetCardRow>
                            <TweetLinkReplie
                                onClick={() => setIsReplyModalOpen(true)}
                                style={{ cursor: "pointer" }}
                            >
                                <img src={icon_Replie} alt="Replies" />
                                <span>{replies?.length}</span>
                            </TweetLinkReplie>

                            {isReplyModalOpen && (
                                <ModalTweet
                                    onClose={() => setIsReplyModalOpen(false)}
                                    replyTo={tweet.id}
                                />
                            )}

                            <TweetLinkReplie
                                onClick={handleLikeToggle}
                                style={{ cursor: "pointer" }}
                            >
                                <img
                                    src={
                                        isLiked
                                            ? icon_curtir_selecionado
                                            : icon_Like
                                    }
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

                            {isMyTweet && (
                                <TweetLinkReplie
                                    onClick={handleDelete}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={icon_Delete} alt="Delete" />
                                </TweetLinkReplie>
                            )}
                        </TweetCardRow>
                    </InfoTweetCard>
                </TweetCardRow>
                {replies && replies.map((reply) => (
                    <ReplyCard
                        key={reply.id}
                        reply={reply}
                        onDeleteSuccess={() => handleReplyDeleted(reply.id)} // passa o id pra remover o reply
                    />
                ))}
            </ContainerTweetCard>


        </>
    );
}