import apiTMDB from '../axios'

export async function getListPopular() {
    return apiTMDB.get(`/movie/popular`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}

export async function getListReleaseDate() {
    return apiTMDB.get(`/movie/upcoming`).then((response) => {
        if (response) {
            return response.data
        }
        return false
    })
}
