import apiTMDB from '../axios'

const apiKey = process.env.REACT_APP_TMDB_APIKEY
const paramsApiKey = `?api_key=${apiKey}`

export async function getListPopular(params) {
    return apiTMDB
        .get('/master/wh', {
            params,
            paramsApiKey,
        })
        .then((response) => {
            if (response) {
                console.log('response data getListPopular', response)
                return response.data
            }
            return false
        })
}
