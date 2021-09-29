import React from 'react'
import './css/activitydetail.css'

const ActivityDetail = ({ activity }) => {
    return (
        <div>
            <div className="activity-container">
                {activity.from} called {activity.to}
                
            </div>
        </div>
    )
}

export default ActivityDetail
