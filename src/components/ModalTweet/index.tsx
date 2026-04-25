import { useState } from "react";
import TweetService from "../../services/tweet";
import { Overlay, ModalContainer, CloseButton, FooterModal, ButtonTweetar } from "./styles";

interface ModalTweetProps {
    onClose: () => void;
    replyTo?: string;
}

export function ModalTweet({ onClose, replyTo }: ModalTweetProps) {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    // Verificando se o botão deve estar ativo
    const isButtonActive = content.trim().length > 0 && !loading;

    async function handlePost() {
        if (!content.trim()) return;
        setLoading(true);

        try {
            let response;

            if (replyTo) {
                // Lógica de Resposta(Reply)
                response = await TweetService.createReply(content, replyTo);
            } else {
                // Lógica de Tweet Normal
                response = await TweetService.createTweet(content);
            }

            if (response.success) {
                setContent("");
                onClose();
                window.location.reload();
            }
        } catch (error) {
            console.error("Erro ao postar:", error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>

                <textarea
                    placeholder={replyTo ? "Postar sua resposta" : "O que está acontecendo?"}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    autoFocus
                />

                <FooterModal>
                    <ButtonTweetar
                        isActive={isButtonActive}
                        onClick={handlePost}
                        disabled={!isButtonActive}
                    >
                        {loading ? "Enviando..." : (replyTo ? "Responder" : "Tweetar")}
                    </ButtonTweetar>
                </FooterModal>
            </ModalContainer>
        </Overlay>
    );

}