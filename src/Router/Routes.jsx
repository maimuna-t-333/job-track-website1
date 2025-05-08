import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Company from "../Pages/Company";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ErrorPage from "../Pages/ErrorPage";
import Profile from "../Pages/Profile";
import Review from "../Pages/Review";

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
    },
    {
        path:'/profile',
        element: <Profile></Profile>
    },
    {
        path:'/register',
        element: <Register></Register>
    },
    {
        path:'/*',
        element: <ErrorPage></ErrorPage>
    },
    {
        path:'/review',
        element: <Review></Review>
    }
])

export default router;