import { useParams } from 'react-router-dom'
import RecommendationMovies from '../../components/RecommendationMovies'

function PagesDetail() {
    const { id } = useParams()

    return (
        <>
            <div className="discover container-lg">
                <div className="row">
                    <div className="col">
                        <h4 className="mb-4">Detail Movie</h4>
                    </div>
                </div>
            </div>
            <RecommendationMovies id={id} />
        </>
    )
}

export default PagesDetail
