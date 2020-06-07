import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard';
import Contacts from './pages/contacts/contacts';
import AddFriend from './pages/addFriend/addFriend';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/addfriend' component={AddFriend} />
      </Router>
    </div>
  );
}

export default App;
