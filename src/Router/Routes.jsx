import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";

const router=createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>
    },
    {
        path:'/login',
        element: <h2>Login</h2>,
        children:[{
            path:'/login/profile',
            element: <p>Profile</p>
        }]
    },
    {
        path:'/register',
        element: <h2>Register</h2>
    },
    {
        path:'/*',
        element: <p>Error</p>
    },
])

export default router;