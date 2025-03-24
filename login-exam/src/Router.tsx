import Home from "./App"
import Signup from "./components/Signup"
import Login from "./components/Login"
import Settings from "./components/Settings"

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
    }
]

export default router