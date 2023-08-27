import { Card } from 'antd'
import { useNavigate } from 'react-router-dom'

function CardComponent({ id, name, year, rating, poster }) {
    const navigate = useNavigate()

    const onDetailMovie = (id) => {
        navigate(`/detail/${id}`)
    }

    return (
        <div onClick={() => onDetailMovie(id)}>
            <Card
                bordered={false}
                className="mb-4"
                hoverable="true"
                cover={
                    <img
                        alt={name}
                        src={`https://image.tmdb.org/t/p/w500${poster}`}
                        style={{ maxWidth: '-webkit-fill-available' }}
                    />
                }
            >
                <div style={{ color: '#ffffff' }}>
                    <h6 className="mt-3 mb-1">
                        {name.length > 18 ? `${name.substring(0, 18)}...` : name}
                    </h6>
                    <p>
                        {year} Rating {rating}
                    </p>
                </div>
            </Card>
        </div>
    )
}

export default CardComponent
