import Card from '../../components/Card'
import movies from '../../dummy/movies.json'

function DiscoverMovies() {
    return (
        <div className="container-lg">
            <h4 className="mb-4">Discover Movies</h4>
            <div className="row row-cols-7 row-cols-sm-2 row-cols-md-5">
                {movies.map((mv) => (
                    <div className="col">
                        <Card name={mv.name} year={mv.year} rating={mv.rating} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DiscoverMovies
