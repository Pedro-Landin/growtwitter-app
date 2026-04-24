import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Feed } from "../pages/Feed";
import Login from "../pages/login";
import { Perfil } from "../pages/Perfil";

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '',
                element: <Feed />
            },
            {
                path: 'explore',
                element: <Perfil />
            },
            {
                path: 'profile',
                element: <Perfil />
            }
        ]
    }
])