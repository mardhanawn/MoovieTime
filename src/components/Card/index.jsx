import { Card } from 'antd'

function CardComponent({ name, year, rating, poster }) {
    return (
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
    )
}

export default CardComponent
