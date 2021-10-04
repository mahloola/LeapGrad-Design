import React from 'react';
import ReactDOM from 'react-dom';
import ActivityFeed from './ActivityFeed.jsx';


const App = () => {

  return (
    <div className='container'>
      <div>
        <ActivityFeed />
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
