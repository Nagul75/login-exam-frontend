import Home from "./App"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import Error from "./components/404Error"
import Pokemon from "./components/Pokemon"

const router = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/settings',
        element: <Settings/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/pokemon/:id',
        element: <Pokemon/>
    },
    {
        path: '*',
        element: <Error/>
    }
]

export default router