import React, { useState, useEffect } from 'react';
import ActivityDetail from './ActivityDetail.jsx'

const ActivityFeed = ( tab ) => {

    const [activitiesPage, setActivitiesPage] = useState(null);
    const [missedCalls, setMissedCalls] = useState(null);
    const [answeredCalls, setAnsweredCalls] = useState(null);
    const [voiceMailCalls, setVoiceMailCalls] = useState(null);

    useEffect(() => {
        console.log(tab);
        console.log("dsjkfhjfds");
        fetch(`https://aircall-job.herokuapp.com/activities`)
            .then(res => res.json())
            .then((data) => {
                setMissedCalls(data.filter(function (e) {
                    return e.call_type == "missed";
                }));
                setAnsweredCalls(data.filter(function (e) {
                    return e.call_type == "answered";
                }));
                setVoiceMailCalls(data.filter(function (e) {
                    return e.call_type == "voicemail";
                }));

                console.log(data);
                setActivitiesPage(data);
            })
            .catch(err => console.error('Unable to load activity data: ', err));
    }, []);

    return (
        <div>
            {/* change answeredCalls to missedCalls or voiceMailCalls */}
            {
              activitiesPage !== null ? answeredCalls.map((activity) => (
                <ActivityDetail key={activity.id} activity={activity} />
                )) : null
            }      
            
        </div>
    )
}

export default ActivityFeed
