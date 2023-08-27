import { Button, Spin } from 'antd'
import moment from 'moment'
import { useState } from 'react'
import { useQuery } from 'react-query'
import Card from '../../components/Card'
import { getListPopular, getListReleaseDate } from '../../services/api/tmdb'

function DiscoverMovies() {
    const [category, setCategory] = useState('popular')
    const [listMovie, setListMovie] = useState()

    useQuery(['dataListPopular', 'movies'], () => getListPopular(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovie(data),
        enabled: category === 'popular',
    })

    useQuery(['dataListReleaseDate', 'movies'], () => getListReleaseDate(), {
        refetchOnWindowFocus: false,
        onSuccess: (data) => setListMovie(data),
        enabled: category === 'release_date',
    })

    if (!listMovie) <Spin />

    return (
        <div className="discover container-lg">
            <div className="row">
                <div className="col">
                    <h4 className="mb-4">Discover Movies</h4>
                </div>
                <div className="col">
                    <div className="row d-flex justify-content-end">
                        <div className="col-auto">
                            <Button
                                className="mr-4"
                                type="primary"
                                danger
                                shape="round"
                                size="small"
                                onClick={() => setCategory('popular')}
                            >
                                Popular
                            </Button>
                        </div>
                        <div className="col-auto">
                            <Button
                                type="primary"
                                shape="round"
                                size="small"
                                onClick={() => setCategory('release_date')}
                            >
                                Release Date
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-7 row-cols-sm-2 row-cols-md-5">
                {listMovie?.results.map((movie) => {
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
