import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Feed } from "../pages/Feed";
import Login from "../pages/login";
import { Perfil } from "../pages/Perfil";
import Explorar from "../pages/Explorar";

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
                element: <Explorar />
            },
            {
                path: 'profile',
                element: <Perfil />
            },
            {
                path: 'profile/:userId', 
                element: <Perfil />
            },
        ]
    }
])