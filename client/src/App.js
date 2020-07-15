import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Search from './pages/search/search';
import AllFriends from './pages/all/allFriends';
import Add from './pages/add/add';

function App() {
  return (
        <Router>
          <Route exact path='/' component={AllFriends} />
          {/* <Route exact path='/contacts' component={Contacts} /> */}
          <Route exact path='/search' component={Search} />
          {/* <Route exact path='/sort' component={Sort} /> */}
          {/* <Route exact path='/all' component={AllFriends} /> */}
          <Route exact path='/add' component={Add} />
        </Router>
  );
}

export default App;
