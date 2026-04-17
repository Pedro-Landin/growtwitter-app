import { useState } from "react";
import { useNavigate } from "react-router"; 
import { useAuth } from "../../hooks/useAuth"; 
import AuthService from "../../services/auth"; 
import { ContainerLogin, LoginCard, LoginCardLeft, LoginCardRight } from "./styles";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false) // Loading local do botão

    const { signIn } = useAuth(); // Função do contexto Auth
    const navigate = useNavigate();

    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();
        
        if (!username || !password) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        setLoading(true);

        const response = await AuthService.login({ username, password });

        if (response.ok && response.data) {

            console.log('response.data', response.data);
            // 1. Avisa o contexto que o usuário logou (salva no state e localStorage)
            signIn(response.data.authUser, response.data.authToken);
            
            // 2. Redireciona para a Home
            navigate('/'); 
        } else {
            // 3. Exibe o erro caso a senha esteja errada ou usuário não exista
            alert(response.message || "Falha ao realizar login");
        }

        setLoading(false);
    }

    return (
        <ContainerLogin>
            <LoginCard>
                <LoginCardLeft>
                    <h1>GrowTwitter</h1>
                    <p>Trabalho final do bloco intermediário desenvolvido por <strong>Pedro Landin</strong></p>
                    <p>O Growtwitter é a plataforma definitiva para todos os apaixonados por redes sociais que buscam uma experiência familiar e poderosa, semelhante ao Twitter, mas com um toque único.</p>
                </LoginCardLeft>

                <LoginCardRight>
                    <h2>Entrar no GrowTwitter</h2>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username">username</label>
                            <input 
                                type="text" 
                                id="username" 
                                name="username" 
                                value={username} 
                                onChange={(event) => setUsername(event.target.value)} 
                            />
                        </div>

                        <div>
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={password} 
                                onChange={(event) => setPassword(event.target.value)} 
                            />
                        </div>

                        <div>
                            {/* Desabilita o botão enquanto carrega */}
                            <button type="submit" disabled={loading}>
                                {loading ? 'Carregando...' : 'Entrar'}
                            </button>
                        </div>
                    </form>
                </LoginCardRight>
            </LoginCard>
        </ContainerLogin>
    );
}