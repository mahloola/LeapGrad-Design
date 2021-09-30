import React from 'react'
import { FiPhoneCall, FiPhoneOff } from "react-icons/fi";
import { AiFillMail } from "react-icons/ai";
import './css/activitydetail.css'

const month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

function isoToDay(isoDate) {
    const date = new Date(isoDate);
    return date.getDate();
}
function isoToMonth(isoDate) {
    const date = new Date(isoDate);
    return month[date.getMonth()];
}
function isoToTime(isoDate) {
    return isoDate.slice(11, 16);

}
function formatDuration(seconds) {
    var minutes = seconds / 60;
    var zerofilled = ('0000' + seconds % 60).slice(-2);
    return (minutes + ":" + zerofilled);
}

const ActivityDetail = ({ activity }) => {
    return (
        <div>
            {/* todo: fix the date to not repeat days*/}
            <div className="date-container">
                {isoToMonth(activity.created_at)}    {isoToDay(activity.created_at)}
            </div>
            <div className="activity-container">
                {activity.call_type == "answered" &&
                    <div className="activity-phone-answered">
                        <FiPhoneCall size={20}></FiPhoneCall>
                    </div>}
                {activity.call_type == "missed" &&
                    <div className="activity-phone-missed">
                        <FiPhoneOff size={20}></FiPhoneOff>
                    </div>}
                {activity.call_type == "voicemail" &&
                    <div className="activity-phone-voicemail">
                        <AiFillMail size={20}></AiFillMail>
                    </div>}
                <table className="activity-table">
                    <tr>
                        <td>
                            <span className="activity-from">{activity.from}</span>
                        </td>
                    </tr>
                    <tr>
                        {activity.call_type == "voicemail" ?
                            <td>
                                sent a voicemail
                            </td>
                            :
                            <td>
                                called <span className="activity-to">{activity.to}</span>
                            </td>}
                        <td>
                            <div className="activity-time">

                                {isoToTime(activity.created_at)}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="activity-duration">
                                for {formatDuration(activity.duration)}
                            </div>
                            {/* leaving this out for now because it's too cluttered
                            <div className="activity-via">
                                via {activity.via}
                            </div>
                             */}
                        </td>

                    </tr>
                </table>
            </div>
        </div>
    )
}

export default ActivityDetail
