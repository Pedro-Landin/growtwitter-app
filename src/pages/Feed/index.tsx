import { useAuth } from "../../hooks/useAuth";
import { Title } from "./styles";

export function Feed() {
    const { user, isAuthenticated } = useAuth();


    return (
        <div>
            <Title>NEw Feed</Title>
            {isAuthenticated ? (
                <p>Bem-vindo, <strong>{user?.name}</strong>! (@{user?.username})</p>
            ) : (
                <p>Nenhum usuário logado.</p>
            )}
        </div>
    );
}