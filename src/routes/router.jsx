import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page404 from '../pages/Page404';
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";




const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout><Home></Home></HomeLayout>
    },
    {
        path: "*",
        element: (
            <Page404 />
        ),
    },
    {
        path: "/auth",
        element: <HomeLayout />,
        children: [
            {
                path: "/auth/login",
                element: <Login />,
            },
            {
                path: "/auth/register",
                element: <Register />,
            }
        ],
    },
    {

    }
]);

export default router;