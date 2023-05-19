import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Main from "../../Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Blog from "../../Pages/Blog/Blog";
import AddToys from "../../Pages/AddToys/AddToys";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Alltoys from "../../Pages/AllToys/Alltoys";




export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },

            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/blog',
                element: <Blog></Blog>

            },
            {
                path: '/allToys',
                element: <Alltoys></Alltoys>
            },
            {
                path: '/addToys',
                element: <PrivateRoute>
                    <AddToys></AddToys>
                </PrivateRoute>
            }
        ]


    }


])