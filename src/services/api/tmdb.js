import apiTMDB from '../axios'
import { apiKey } from '../../utility/GlobalConst'

const paramsApiKey = `?api_key=${apiKey}`

export async function getListPopular() {
    return apiTMDB.get(`/movie/popular${paramsApiKey}`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}
