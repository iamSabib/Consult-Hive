import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Page404 from '../pages/Page404';
import Home from "../pages/Home";
import HomeLayout from "../layouts/HomeLayout";




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
    }
   
]);

export default router;