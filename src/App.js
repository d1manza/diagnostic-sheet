import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './css/App.css';

import Class1 from './components/class1'
import Class2 from './components/class2'
import Class3 from './components/class3'
import Class4 from './components/class4'

function App() {
  return (
    <Switch className='app'>
      <Route
        exact
        path='/'
        component={Class1}
      />
      <Route
        exact
        path='/class2'
        component={Class2}
      />
      <Route
        exact
        path='/class3'
        component={Class3}
      />
      <Route
        exact
        path='/class4'
        component={Class4}
      />
    </Switch>
  );
}

export default App;
