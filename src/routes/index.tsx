import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Feed } from "../pages/Feed";
import Login from "../pages/login";

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
                element: <h1>Explore</h1>
            },
            {
                path: 'profile',
                element: <h1>Profile</h1>
            }
        ]
    }
])