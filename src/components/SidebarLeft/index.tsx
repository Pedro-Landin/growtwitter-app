import { useState } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../../hooks/useAuth";
import { useTheme } from "../../hooks/useTheme";

// Icons Logo
import logo from '../../assets/logo.png'
import icon from '../../assets/icon.png'
// Icons Explorar
import icon_Explorar_Dark from '../../assets/icon_Explorar_Dark.png'
import icon_Explorar_Light from '../../assets/icon_Explorar_Light.png'
// Icons Pagina Inicial
import icon_Paginainicial_Dark from '../../assets/icon_Paginainicial_Dark.png'
import icon_Paginainicial_Light from '../../assets/icon_Paginainicial_Light.png'
// Icons Perfil
import icon_Perfil_Dark from '../../assets/icon_Perfil_Dark.png'
import icon_Perfil_Light from '../../assets/icon_Perfil_Light.png'

import { BlockMenu, ContainerSidebarLeft, LinkMenu, ButtonTweet, CardUser, CardUserInfo, ButtonSair } from "./styles";
import { ModalTweet } from "../ModalTweet";

export default function SidebarLeft() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { user, signOut } = useAuth();
    const { theme } = useTheme();
    const navigate = useNavigate();

    function handleLogout() {
        const confirmLogout = window.confirm("Deseja realmente sair da sua conta?");

        if (confirmLogout) {
            signOut();
            navigate("/login"); // Redireciona para a tela de login após sair
        }
    }

    return (
        <ContainerSidebarLeft>
            <div className="logo">
                <img src={logo} alt="Growtwitter" />
            </div>

            <BlockMenu>
                <LinkMenu to="/" end>
                    {
                        theme === 'dark' ? (
                            <img src={icon_Paginainicial_Dark} alt="Página Inicial" />
                        ) : (
                            <img src={icon_Paginainicial_Light} alt="Página Inicial" />
                        )
                    }
                    <span>Página Inicial</span>
                </LinkMenu>

                <LinkMenu to="/explore">
                    {
                        theme === 'dark' ? (
                            <img src={icon_Explorar_Dark} alt="Explorar" />
                        ) : (
                            <img src={icon_Explorar_Light} alt="Explorar" />
                        )
                    }
                    <span>Explorar</span>
                </LinkMenu>

                <LinkMenu to="/profile">
                    {
                        theme === 'dark' ? (
                            <img src={icon_Perfil_Dark} alt="Perfil" />
                        ) : (
                            <img src={icon_Perfil_Light} alt="Perfil" />
                        )
                    }
                    <span>Perfil</span>
                </LinkMenu>
            </BlockMenu>

            <ButtonTweet onClick={() => setIsModalOpen(true)}>
                Tweetar
            </ButtonTweet>

            {isModalOpen && (
                <ModalTweet onClose={() => setIsModalOpen(false)} />
            )}

            <CardUser>
                <div className="avatar">
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: '#E0E0E0', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                        <img src={icon} alt="Avatar" />
                    </div>
                </div>
                <CardUserInfo>
                    <strong>{user?.name}</strong>
                    <span>@{user?.username}</span>

                    <ButtonSair
                        onClick={handleLogout}
                    >
                        Sair
                    </ButtonSair>
                </CardUserInfo>
            </CardUser>
        </ContainerSidebarLeft>
    );
}