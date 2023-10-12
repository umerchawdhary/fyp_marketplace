import React from 'react'
import LiveStatus from './livestatus'
import VideoContent from './videocontent'
import VideoThumb from './videothumb'

function Video({ path }) {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="trending-gameplay-item mb-50">
                <VideoThumb path={path} />
                <div className="d-block d-sm-flex align-items-start">
                    <VideoContent />
                    <LiveStatus />
                </div>
            </div>
        </div>
    )
}

export default Video