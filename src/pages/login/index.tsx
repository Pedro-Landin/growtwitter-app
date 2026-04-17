import { useState } from "react";
import AuthService from "../../services/auth"; 
import { ContainerLogin, LoginCard, LoginCardLeft, LoginCardRight } from "./styles";

export default function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    async function handleLogin(event: React.FormEvent) {
        event.preventDefault();
        
        console.log("Tentando logar com:", { username, password });

        const response = await AuthService.login({ username, password });

        console.log("Resposta da API:", response);
        
        if (response.ok) {
            console.log("Login realizado com sucesso!", response.data);
        } else {
            console.log("Falha no login:", response.message);
        }
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
                            <button type="submit">Entrar</button>
                        </div>
                    </form>
                </LoginCardRight>
            </LoginCard>
        </ContainerLogin>
    );
}