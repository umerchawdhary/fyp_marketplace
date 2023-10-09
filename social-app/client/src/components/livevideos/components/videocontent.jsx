import { Link } from 'react-router-dom'

function VideoContent() {
    return (
        <div className="gameplay-content">
            <h5 className="title"><Link to="#">Mark Sniper sells House</Link></h5>
            <div className="gameplay-meta">
                <ul>
                    <li>January 25, 2021</li>
                </ul>
            </div>
        </div>
    )
}

export default VideoContent