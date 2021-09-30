import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';
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
  function setVoicemailTab() {
    setTab("voicemail");
  }


  return (
    <div className='container'>
      <div className='navbar'>
        <Header />
          <button className="incoming-tab" onClick={setIncomingTab}>incoming</button>
          <button className="outgoing-tab" onClick={setOutgoingTab}>outgoing</button>
          <button className="voicemail-tab" onClick={setVoicemailTab}>voicemail</button>
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
