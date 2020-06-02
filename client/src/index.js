import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { set, get } from 'idb-keyval';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

async function testIDBKeyval() {
  let contact = {
    name: 'sarah',
    festival: 'edc',
    note: 'super cute girl',
    image: 'http://...',
    phone: '253-245-8544'
  }
  await set('sarah carter', contact);
  const whatDoWeHave = await get('sarah carter');
  console.log(`When we queried idb-keyval for 'hello', we found: ${whatDoWeHave}`);
}

testIDBKeyval();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
