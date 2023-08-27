import moment from 'moment'
import { useQuery } from 'react-query'
import Card from '../../components/Card'
import { getListPopular } from '../../services/api/tmdb'

function DiscoverMovies() {
    const listPopular = useQuery(['dataListPopular', 'moviews'], () => getListPopular(), {
        refetchOnWindowFocus: false,
    })
    console.log('listPopular DiscoverMovies', listPopular)

    return (
        <div className="container-lg">
            <h4 className="mb-4">Discover Movies</h4>
            <div className="row row-cols-7 row-cols-sm-2 row-cols-md-5">
                {listPopular.data?.results.map((movie) => {
                    const yearRelease = moment(movie.release_date).format('YYYY')
                    return (
                        <div key={movie.id} className="col">
                            <Card
                                name={movie.original_title}
                                year={yearRelease}
                                rating={movie.vote_average}
                                poster={movie.poster_path}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default DiscoverMovies
