import { useState } from "react";
import TweetService from "../../services/tweet";
import { Overlay, ModalContainer, CloseButton, FooterModal, ButtonTweetar } from "./styles";

interface ModalTweetProps {
    onClose: () => void;
}

export function ModalTweet({ onClose }: ModalTweetProps) {
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(false);

    // Verificando se o botão deve estar ativo
    const isButtonActive = content.trim().length > 0 && !loading;

    async function handlePost() {
        if (!content.trim()) return;
        setLoading(true);

        const response = await TweetService.createTweet(content);
        if (response.success) {
            setContent("");
            onClose();
            window.location.reload(); // Solução simples para atualizar o feed
        }
        setLoading(false);
    }

    return (
        <Overlay onClick={onClose}>
            <ModalContainer onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>

                <textarea
                    placeholder="O que está acontecendo?"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    autoFocus
                />

                <FooterModal>
                    <ButtonTweetar
                        isActive={isButtonActive} // Passando a prop para o styled component
                        onClick={handlePost}
                        disabled={!isButtonActive}
                    >
                        {loading ? "Postando..." : "Tweetar"}
                    </ButtonTweetar>
                </FooterModal>
            </ModalContainer>
        </Overlay>
    );
}