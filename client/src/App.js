import React, { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Add from './pages/add/add';

const AllFriends = lazy(() => import('./pages/all/allFriends'));
const Search = lazy(() => import('./pages/search/search'))

function App() {
  return (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div className='app-container'>
            <Route exact path='/' component={Add} />
            <Route exact path='/allFriends' component={AllFriends} />
            <Route exact path='/search' component={Search} />
            <Route exact path='/add' component={Add} />
            </div>
          </Suspense>
        </Router>
  );
}


export default App;
