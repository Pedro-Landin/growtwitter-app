import { Outlet, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import Header from "../components/Header";

export function DefaultLayout() {
    const { isAuthenticated, loading } = useAuth();

    // 1. Enquanto o App checa o localStorage, mostramos um loading
    if (loading) {
        return <h1>Carregando...</h1>;
    }

    // 2. Se não estiver autenticado, redireciona para o login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    // 3. Se estiver logado, renderiza o layout completo
    return (
        <>
            <Header />
            <h1>Sidebar</h1>
            <Outlet />
            <h1>Right</h1>
        </>
    )
}