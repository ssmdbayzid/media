import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import Login from "../Page/Login";
import Signup from "../Page/Signup";
import About from "../Page/About";
import Message from "../Page/Message";
import MainLayout from "../Layout/MainLayout";
import ThumbleDetails from "../Page/ThumbleDetails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },                           
            {
                path: "/photo/:id",
                element: <ThumbleDetails />
            },                           
            {
                path: "/login",
                element: <Login />
            },         
            {
                path: "/sign-up",
                element: <Signup />
            },         
            {
                path: "/about",
                element: <About />
            },         
            {
                path: "/feedback",
                element: <Message />
            },         
        ]
    }
    
])

export default router