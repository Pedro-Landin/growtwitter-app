import { Outlet } from "react-router";
import Header from "../components/Header";

export function DefaultLayout() {
    return (
        <>
            <Header />
            <h1>Sidebar</h1>
            <Outlet />
            <h1>Right</h1>
        </>

    )
}