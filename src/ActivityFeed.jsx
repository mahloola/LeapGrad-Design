import React, { useState, useEffect } from 'react';
import ActivityDetail from './ActivityDetail.jsx'

const ActivityFeed = () => {

    const [activitiesPage, setActivitiesPage] = useState(null);
    useEffect(() => {
        fetch(`https://aircall-job.herokuapp.com/activities`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                setActivitiesPage(data);
            })
            .catch(err => console.error('Unable to load activity data: ', err));
    }, []);

    return (
        <div>
            {
              activitiesPage !== null ? activitiesPage.map((activity) => (
                <ActivityDetail key={activity.id} activity={activity} />
                )) : null
            }    
            
        </div>
    )
}

export default ActivityFeed
