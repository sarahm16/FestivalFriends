import React, { Suspense, lazy } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

//import Search from './pages/search/search';
//import AllFriends from './pages/all/allFriends';
import Add from './pages/add/add';

const AllFriends = lazy(() => import('./pages/all/allFriends'));
//const Add = lazy(() => import('./pages/add/add'));
const Search = lazy(() => import('./pages/search/search'))

function App() {
  return (
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <div className='app-container'>
            <Route exact path='/' component={Add} />
            <Route exact path='/allFriends' component={AllFriends} />
            {/* <Route exact path='/contacts' component={Contacts} /> */}
            <Route exact path='/search' component={Search} />
            {/* <Route exact path='/sort' component={Sort} /> */}
            {/* <Route exact path='/all' component={AllFriends} /> */}
            <Route exact path='/add' component={Add} />
            </div>
          </Suspense>
        </Router>
  );
}


export default App;
