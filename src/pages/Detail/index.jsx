import { useState } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'

import ReviewMovies from '../../components/ReviewsMovies'
import RecommendationMovies from '../../components/RecommendationMovies'
import { getDetailMovie } from '../../services/api/tmdb'

function PagesDetail() {
    const { id } = useParams()
    const [detailMovie, setDetailMovie] = useState(null)

    useQuery(['dataDetailMovie', 'movies', id], () => getDetailMovie(id), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setDetailMovie(data),
        enabled: !!id,
    })
    // console.log('detailMovie PagesDetail', detailMovie)

    return (
        <>
            <div className="discover container-lg">
                <div className="row">
                    <div className="col">
                        <h4 className="mb-4">Detail Movie</h4>
                    </div>
                </div>
            </div>
            <ReviewMovies id={id} />
            <RecommendationMovies id={id} />
        </>
    )
}

export default PagesDetail
