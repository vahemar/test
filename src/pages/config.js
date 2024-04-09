import AuthLayout from "../layouts/AuthLayout";
import NotFound from "./404";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Login from "./Login";

export const config = [
    {
        element: <Home />,
        path: '/',
        Layout: AuthLayout
    },
    {
        element: <Login />,
        path: '/login',
        Layout: AuthLayout
    },
    {
        element: <Contact />,
        path: '/contact',
        Layout: AuthLayout
    },
    {
        element: <About />,
        path: '/about',
        Layout: AuthLayout
    },
    {
        element: <NotFound />,
        path: '/404',
        Layout: AuthLayout
    }
]