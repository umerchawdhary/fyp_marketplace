import FeatherIcon from 'feather-icons-react'
import { Link } from 'react-router-dom'

function Header({ isAuth, userId }) {
    return (
        <div className="row align-items-center mb-30">
            <div className="col">
                <div className="hf-section-title">
                    <h4 className="title">Trending</h4>
                </div>
            </div>
            <div className="col">
                {isAuth && <div className="section-btn">
                    <Link to="#"
                        style={{ padding: '3px 4px', width: '85px' }}
                        className="btn-solid d-flex align-items-center justify-content-end"
                    >
                        <FeatherIcon
                            style={{ marginRight: '5px' }}
                            icon={"radio"}
                            size={18}
                        />
                        <span>Go Live</span>
                    </Link>
                </div>}
            </div>
        </div>
    )
}

export default Header