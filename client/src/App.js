import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard';
import Contacts from './pages/contacts/contacts';
import Container from './components/container/container';

import Background from './images/edc2.jpg';

function App() {
  return (
    <div className="App" style={{backgroundImage: "url(" + Background + ")"}}>
      
      <Container />
      {/* <Router>
        <Route exact path='/' component={Dashboard} />
        <Route exact path='/contacts' component={Contacts} />
        <Route exact path='/search' component={Search} />
      </Router> */}
    </div>
  );
}

export default App;
