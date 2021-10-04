import React, { useState, useEffect } from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import Header from './Header.jsx';
import ActivityDetail from './ActivityDetail.jsx'

const ActivityFeed = () => {

    const [incomingCalls, setIncomingCalls] = useState(null);
    const [outgoingCalls, setOutgoingCalls] = useState(null);
    const [allCalls, setAllCalls] = useState(null);

    const [toggleState, setToggleState] = useState(1);

    function toggleTab(index) {
        setToggleState(index);
        console.log(toggleState);
    }

    useEffect(() => {
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
            <div className='navbar'>
                <Header />
                <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)}><FiPhoneIncoming size={20}></FiPhoneIncoming></button>
                <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)}><FiPhoneOutgoing size={20}></FiPhoneOutgoing></button>
                <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(3)}><BsCircle size={20}></BsCircle></button>
            </div>



            <div className="container-view content-tabs">
                <div className={toggleState === 1 ? "active-content" : "content"}>
                    {
                        incomingCalls !== null ? incomingCalls.map((activity) => (
                            <ActivityDetail key={activity.id} activity={activity} />
                        )) : null
                    }
                </div>
                <div className={toggleState === 2 ? "active-content" : "content"}>
                    {
                        outgoingCalls !== null ? outgoingCalls.map((activity) => (
                            <ActivityDetail key={activity.id} activity={activity} />
                        )) : null
                    }
                </div>
                <div className={toggleState === 3 ? "active-content" : "content"}>
                    {
                        allCalls !== null ? allCalls.map((activity) => (
                            <ActivityDetail key={activity.id} activity={activity} />
                        )) : null
                    }
                </div>
            </div>
            <div className="bottom-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#424242" fill-opacity="1" d="M0,256L60,245.3C120,235,240,213,360,213.3C480,213,600,235,720,256C840,277,960,299,1080,277.3C1200,256,1320,192,1380,160L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>
        </div >
    )
}

export default ActivityFeed
