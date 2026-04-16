import { createBrowserRouter } from "react-router";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { Feed } from "../pages/Feed";

export const routes = createBrowserRouter([
    {
        path: '/login',
        element: <h1>Home</h1>
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