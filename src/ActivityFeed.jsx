import React, { useState, useEffect } from 'react';
import ActivityDetail from './ActivityDetail.jsx'

const ActivityFeed = (tab) => {

    const [incomingCalls, setIncomingCalls] = useState(null);
    const [outgoingCalls, setOutgoingCalls] = useState(null);
    const [allCalls, setAllCalls] = useState(null);

    useEffect(() => {
        console.log(tab);
        console.log("dsjkfhjfds");
        fetch(`https://aircall-job.herokuapp.com/activities`)
            .then(res => res.json())
            .then((data) => {
                setIncomingCalls(data.filter(function (e) {
                    return e.direction == "inbound";
                }));
                setOutgoingCalls(data.filter(function (e) {
                    return e.direction == "outbound";
                }));

                console.log(data);
                setAllCalls(data);
            })
            .catch(err => console.error('Unable to load activity data: ', err));
    }, []);

    return (
        <div>
            {/* I decided to stick with the instructions and not make extra components for the tabs*/}
            {/* my approach was to pass the tab as a prop */}
            {/* I don't really know how to do this */}
            {
                incomingCalls !== null ? incomingCalls.map((activity) => (
                    <ActivityDetail key={activity.id} activity={activity} />
                )) : null
            }
            {
                incomingCalls !== null && tab === "outgoing" ? outgoingCalls.map((activity) => (
                    <ActivityDetail key={activity.id} activity={activity} />
                )) : null
            }
            {
                incomingCalls !== null && tab === "all" ? allCalls.map((activity) => (
                    <ActivityDetail key={activity.id} activity={activity} />
                )) : null
            }

        </div>
    )
}

export default ActivityFeed
