import { Card } from 'antd'
// const { Meta } = Card

function CardComponent({ name, year, rating }) {
    return (
        <Card
            className="mb-4"
            hoverable="true"
            cover={
                <img
                    alt={name}
                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    style={{ maxWidth: '-webkit-fill-available' }}
                />
            }
        >
            <div style={{ color: 'white' }}>
                <h6 className="mt-3 mb-1">
                    {name.length > 18 ? `${name.substring(0, 18)}...` : name}
                </h6>
                <p>{year}</p>
            </div>
        </Card>
    )
}

export default CardComponent
