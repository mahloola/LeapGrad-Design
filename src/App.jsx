import React from 'react';
import ReactDOM from 'react-dom';
import ActivityFeed from './ActivityFeed.jsx';
import Header from './Header.jsx';

const App = () => {

  return (
    <div className='container'>
      <div className='navbar'>
        <Header/>
      </div>
      <div className="container-view">
        <ActivityFeed/>
      </div>
      <div>
       
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
