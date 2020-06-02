import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
