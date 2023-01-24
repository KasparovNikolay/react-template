import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { MainPage } from '../pages/MainPage';


const routerConfig = [
    {
        path: '/',
        // element: <StaticLayout />,
        // errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <MainPage />,
            },
            {
                path: '*',
                // element: <UnknownPage />,
            },
        ],
    },
];

export const router = createBrowserRouter(routerConfig);
