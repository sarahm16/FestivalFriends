import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard';
import Contacts from './pages/contacts/contacts';
import Search from './pages/search/search';
import Sort from './pages/sort/sort';
import AllFriends from './pages/all/allFriends';
import Form from './components/friendForm/friendForm';
import Add from './pages/add/add';
// import Navbar from './components/navbar';

import Background from './images/edc2.jpg';

function App() {
  return (
    // <div className="App" style={{backgroundImage: "url(" + Background + ")", height: '100%'}}>
        <Router>
          <Route exact path='/' component={AllFriends} />
          <Route exact path='/contacts' component={Contacts} />
          <Route exact path='/search' component={Search} />
          <Route exact path='/sort' component={Sort} />
          <Route exact path='/all' component={AllFriends} />
          <Route exact path='/add' component={Add} />
        </Router>
      
    // </div>
  );
}

export default App;
