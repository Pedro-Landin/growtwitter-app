import { useState } from "react";
import { useAuth } from "./useAuth";
import TweetService from "../services/tweet";

export function useLike(tweetId: string, initialLikes: any[]) {
    const { user } = useAuth();

    // Verifica se o usuário já curtiu o tweet
    const [isLiked, setIsLiked] = useState(() => {
        if (!user?.id || !Array.isArray(initialLikes)) return false;
        return initialLikes.some((like: any) => like.author?.id === user.id);
    });

    // Contagem de likes
    const [likesCount, setLikesCount] = useState(
        Array.isArray(initialLikes) ? initialLikes.length : 0
    );

    // Função para alternar o like
    async function handleLikeToggle() {
        if (!user?.id) return alert("Faça login para interagir!");

        try {
            if (isLiked) {
                const response = await TweetService.userUnLike(tweetId);
                if (response) {
                    setIsLiked(false);
                    setLikesCount((prev) => prev - 1);
                }
            } else {
                const response = await TweetService.likeTweet(tweetId);
                if (response.success) {
                    setIsLiked(true);
                    setLikesCount((prev) => prev + 1);
                }
            }
        } catch (error) {
            console.error("Erro na interação de like:", error);
        }
    }

    return { isLiked, likesCount, handleLikeToggle };
}