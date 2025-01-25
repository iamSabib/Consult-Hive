import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Page404 from '../pages/Page404';
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/add-service",
                element: <PrivateRoute> <AddService /> </PrivateRoute>
            },
            {
                path: "/manage-service",
                element: <PrivateRoute> <ManageService /> </PrivateRoute>
            }
        ]
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
    
    

]);

export default router;