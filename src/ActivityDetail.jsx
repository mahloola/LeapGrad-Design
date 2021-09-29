import React from 'react'
import { BiPhoneIncoming, BiPhoneOutgoing } from "react-icons/bi"
import './css/activitydetail.css'

const ActivityDetail = ({ activity }) => {
    return (
        <div>

            <div className="activity-container">

                {activity.direction == "outbound" &&
                    <div className="activity-phone-outbound">
                        <BiPhoneOutgoing size={20}></BiPhoneOutgoing>
                    </div>}

                {activity.direction == "inbound" &&
                    <div className="activity-phone-inbound">
                        <BiPhoneIncoming size={20}></BiPhoneIncoming>
                    </div>}

                {activity.from}
                <br />
                <div className="activity-to">
                    called {activity.to}
                </div>
                <div className="activity-duration">
                    {activity.duration}
                </div>
            </div>
        </div>
    )
}

export default ActivityDetail
