import React from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import 'bootstrap/dist/css/bootstrap.min.css'
import { defaultQueryOption } from './utility/reactQueryHelper'
import App from './App.jsx'
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
        <App />
    </QueryClientProvider>,
)
