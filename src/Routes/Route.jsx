import Home from '../Components/Pages/Home/Home'
import About from '../Components/Pages/About/About'
import Contact from '../Components/Pages/Contact/Contact'
import Menu from '../Components/Pages/Menu/Menu'
import PageNotFound from '../Components/Pages/PageNotFound/PageNotFound'

export const ROUTES = [
    {path:"*",element:<PageNotFound/>},
    {path:"/",element:<Home/>},
    {path:"/home",element:<Home/>},
    {path:"/about",element:<About/>},
    {path:"/contact",element:<Contact/>},
    {path:"/menu",element:<Menu/>},
]

export const PAGES_PATHS = ROUTES.map(route=>route.path)