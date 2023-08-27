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

export async function getRecommendationMovie(id) {
    return apiTMDB.get(`movie/${id}/recommendations`).then((response) => {
        if (response) {
            const { results } = response.data
            const top5Recommendation = results.slice(0, 5)
            return top5Recommendation
        }
        return false
    })
}
