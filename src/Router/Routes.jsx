import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Company from "../Pages/Company";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
        element: <Login></Login>,
        children:[{
            path:'/login/profile',
            element: <p>Profile</p>
        }]
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/*',
        element: <p>Error</p>
    },
])

export default router;