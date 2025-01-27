import { createBrowserRouter} from "react-router-dom";
import Page404 from '../pages/Page404';
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddService from "../pages/AddService";
import ManageService from "../pages/ManageService";
import ServiceDetails from "../pages/ServiceDetails";
import AllServices from "../pages/AllServices";
import UpdateService from "../pages/UpdateService";
import BookedService from "../pages/BookedService";
import ServicesTodo from "../pages/ServicesTodo";
import Faq from "../pages/Faq";



const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("https://consult-hive-server.vercel.app/featureservices"),
            },
            {
                path: "/allservice",
                element: <AllServices></AllServices>,
                loader: () => fetch("https://consult-hive-server.vercel.app/services"),
            },
            {
                path: "/service/:id",
                element: <PrivateRoute> <ServiceDetails /> </PrivateRoute>,
                loader: ({params}) => fetch(`https://consult-hive-server.vercel.app/services/${params.id}`),
            },
            {
                path: "/add-service",
                element: <PrivateRoute> <AddService /> </PrivateRoute>
            },
            {
                path: "/manage-service",
                element: <PrivateRoute> <ManageService /> </PrivateRoute>
            },
            {
                path: "/upadate-service/:id",
                element: <PrivateRoute> <UpdateService /> </PrivateRoute>,
                loader: ({params}) => fetch(`https://consult-hive-server.vercel.app/services/${params.id}`),
            },
            {
                path: "/booked-service",
                element: <PrivateRoute> <BookedService /> </PrivateRoute>
            },
            {
                path: "/services-todo",
                element: <PrivateRoute> <ServicesTodo /> </PrivateRoute>
            },
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
    {
        path: "/faq",
        element: <HomeLayout />,
        children:[ 
            {
                path: "/faq",
                element:<Faq />
            }  
        ]
    },
    

]);

export default router;