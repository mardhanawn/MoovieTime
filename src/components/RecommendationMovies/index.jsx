import moment from 'moment'
import { useState } from 'react'
import { useQuery } from 'react-query'

import Card from '../Card'
import Spinner from '../Spinner'
import { getRecommendationMovie } from '../../services/api/tmdb'

function RecommendationMovies({ id }) {
    const [listMovie, setListMovie] = useState(null)

    useQuery(['dataListPopular', 'movies', id], () => getRecommendationMovie(id), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovie(data),
        enabled: !!id,
    })

    return (
        <div className="discover container-lg">
            <div className="row">
                <div className="col">
                    <h5 className="mb-4">Recommendation Movies</h5>
                </div>
            </div>
            {!listMovie && <Spinner />}
            {listMovie && (
                <div className="row row-cols-7 row-cols-sm-2 row-cols-md-5">
                    {listMovie.map((movie) => {
                        const yearRelease = moment(movie.release_date).format('YYYY')
                        return (
                            <div key={movie.id} className="col">
                                <Card
                                    id={movie.id}
                                    name={movie.original_title}
                                    year={yearRelease}
                                    rating={movie.vote_average}
                                    poster={movie.poster_path}
                                />
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}

export default RecommendationMovies
