import axios from 'axios'
import { baseURL } from '../../utility/GlobalConst'

const apiClient = axios.create({ baseURL })

apiClient.interceptors.request.use((request) => request)

apiClient.interceptors.response.use(undefined, (error) => {
    const { response } = error
    if (!response) {
        throw new Error('Coba ulangi beberapa saat lagi!')
    }

    throw error
})

export default apiClient
