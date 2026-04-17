import { useTheme } from "../../hooks/useTheme";
import { ButtonAlteredTheme, ContainerHeader } from "./styles";

export default function Header() {

    const { toggleTheme } = useTheme();

    return (
        <ContainerHeader>
            <h1>GrowTwitter</h1>

            <ButtonAlteredTheme onClick={toggleTheme}> Alternar tema </ButtonAlteredTheme>
        </ContainerHeader>
    );
}