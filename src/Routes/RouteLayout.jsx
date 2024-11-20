import React from 'react'
import { Outlet,useLocation} from 'react-router-dom'
import HeaderProvider from '../Components/shared/header/Context/HeaderProvider'
import Footer from '../Components/shared/Footer/Footer'
import {PAGES_PATHS} from './Route'

function RouteLayout() {
    const location = useLocation()
    const isNotFoundPage = !PAGES_PATHS.includes(location.pathname);
    if(isNotFoundPage) return <Outlet />
    return (
        <div className='App'>
            <HeaderProvider />
            <Outlet />
            <Footer />
        </div>
    )
}
export default RouteLayout