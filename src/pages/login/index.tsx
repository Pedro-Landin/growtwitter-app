import { ContainerLogin, LoginCard, LoginCardLeft, LoginCardRight } from "./styles";

export default function Login() {

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
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>

                        <div>
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" name="password" />
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