import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'

// set UI libyary
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Footer from './components/Footer'
import Home from './pages/Home'

import { defaultQueryOption } from './utility/reactQueryHelper'
// import App from './App.jsx'
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

root.render(
    <QueryClientProvider client={queryClient}>
        {/* <App /> */}
        <Home />
        <Footer />
    </QueryClientProvider>,
)
