import MoovieTimeBlack from '../../assets/MoovieTimeBlack.png'

function Footer() {
    return (
        <div className="container-lg my-5">
            <div className="row">
                <div
                    className="col-lg-4 mt-lg-0 mt-md-5 d-flex d-md-flex justify-content-center"
                    style={{ color: '#929292' }}
                >
                    2021 MoovieTime. All right reserved
                </div>
                <div
                    className="col-lg-4 mt-5 mt-lg-0 mt-md-5 d-flex d-md-flex justify-content-center"
                    style={{ color: '#929292' }}
                >
                    <img src={MoovieTimeBlack} style={{ color: '#929292' }} />
                </div>
                <div
                    className="col-lg-4 mt-5 mt-lg-0 mt-md-5 d-flex d-md-flex justify-content-center"
                    style={{ color: '#929292' }}
                >
                    Made with React by ardhanaawahyu
                </div>
            </div>
        </div>
    )
}

export default Footer
