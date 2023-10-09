import { Link } from 'react-router-dom'

function UserInfo({ to, avatar, fullName }) {
    return (
        <div className="user-info">
            <div className="media">
                <Link to={to} className="user-img">
                    <img src={avatar} className="img-fluid lazyload bg-img"
                        alt="user" />
                </Link>
                <div className="media-body">
                    <Link to={to}>
                        <h5>{fullName}</h5>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default UserInfo