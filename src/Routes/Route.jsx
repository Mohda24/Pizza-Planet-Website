import React, { lazy } from 'react';
import Home from '../Components/Pages/Home/Home';

const About = lazy(() => import('../Components/Pages/About/About'));
const Contact = lazy(() => import('../Components/Pages/Contact/Contact'));
const Menu = lazy(() => import('../Components/Pages/Menu/Menu'));
const PageNotFound = lazy(() => import('../Components/Pages/PageNotFound/PageNotFound'));

export const ROUTES = [
    { path: "*", element: <PageNotFound /> },
    { path: "/", element: <Home /> },
    { path: "/home", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/contact", element: <Contact /> },
    { path: "/menu", element: <Menu /> },
];

export const PAGES_PATHS = ROUTES.map(route => route.path);