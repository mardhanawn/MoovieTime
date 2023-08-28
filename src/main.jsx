import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

// set UI libyary
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './components/Footer'
import Home from './pages/Home'
import Detail from './pages/Detail'
import PagesError404 from './pages/404'

import { defaultQueryOption } from './utility/reactQueryHelper'
import './index.css'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            ...defaultQueryOption,
        },
        mutations: {
            ...defaultQueryOption,
        },
    },
})

const root = createRoot(document.getElementById('root'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/detail/:id',
        element: <Detail />,
    },
    {
        path: '*',
        element: <PagesError404 />,
    },
    {
        path: '/404',
        element: <PagesError404 />,
    },
])

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <Footer />
        </QueryClientProvider>
    </React.StrictMode>,
)
