import { useTheme } from "../../hooks/useTheme";
import { ContainerHeader } from "./styles";

export default function Header() {

    const { toggleTheme } = useTheme();

    return (
        <ContainerHeader>
            <h1>GrowTwitter</h1>

            <button onClick={toggleTheme}> Alternar tema </button>
        </ContainerHeader>
    );
}