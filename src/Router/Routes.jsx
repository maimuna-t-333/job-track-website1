import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Company from "../Pages/Company";
import Home from "../Pages/Home";

const router=createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        loader:()=>fetch('company.json'),
        children:[{
            index:true,
            element:<Home></Home>
        },
        {
            path:'companyDetails/:id',
            element:<Company></Company>
        },
    ]

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