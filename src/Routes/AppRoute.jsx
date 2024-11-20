import React from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider, } from 'react-router-dom'
import RouteLayout from './RouteLayout'
import { ROUTES } from './Route'

function AppRoute() {
    const routes = createRoutesFromChildren(


        <Route path='/' element={<RouteLayout />}>
            {ROUTES.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
            ))}
        </Route>

    )
    const router = createBrowserRouter(routes);
    return (
        <RouterProvider router={router} future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
            v7_normalizeFormMethod: true,
            v7_fetcherPersist: true,
            v7_partialHydration: true,
            v7_skipActionStatusRevalidation: true,



        }} />
    )
}

export default AppRoute
