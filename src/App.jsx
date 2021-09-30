import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
import { FiPhoneIncoming, FiPhoneOutgoing } from "react-icons/fi";
import { BsCircle } from "react-icons/bs";
import ActivityFeed from './ActivityFeed.jsx';
import Header from './Header.jsx';

const App = () => {

  const [tab, setTab] = useState(null);

  function setIncomingTab() {
    setTab("incoming");
  }
  function setOutgoingTab() {
    setTab("outgoing");
  }
  function setAllTab() {
    setTab("all");
  }


  return (
    <div className='container'>
      <div className='navbar'>
        <Header />
          <button className="incoming-tab" onClick={setIncomingTab}><FiPhoneIncoming size={20}></FiPhoneIncoming></button>
          <button className="outgoing-tab" onClick={setOutgoingTab}><FiPhoneOutgoing size={20}></FiPhoneOutgoing></button>
          <button className="all-tab" onClick={setAllTab}><BsCircle size={20}></BsCircle></button>
      </div>
      <div className="container-view">
        <ActivityFeed tab={tab} />
      </div>
      <div>

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
