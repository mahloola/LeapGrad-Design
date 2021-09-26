import React, { useState, useEffect } from 'react';
import ActivityDetail from './ActivityDetail.jsx'

// async function getCall(id) {
//   const res = await fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
//   return await res.json()
// }

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
    // <Container className="activity">
    //     <Row>
    //         {
    //             activities.map((activity) => (
    //                 <ActivityDetail key={activity.id} activity={activity}></ActivityDetail>
    //             ))
    //         }
    //         <Col>
    //         </Col>
    //     </Row>
    // </Container>

    return (
        <div>
            {
              activitiesPage !== null ? activitiesPage.map((activity) => (
                <ActivityDetail activity={activity} />
                )) : null
            }    
            
        </div>
    )
}

export default ActivityFeed
