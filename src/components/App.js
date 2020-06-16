import React from 'react';
import { Switch, Route } from 'react-router-dom'

import TaskList from './TaskList'
import NavBar from '../components/NavBar'
import Home from '../components/Home'
import Create from '../components/Create'
import { Page } from '../styles'

function App() {
  return (
    <div className="App">
      <NavBar />
        <Page>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/workboard' component={TaskList} />
            <Route exact path='/create' component={Create} />
          </Switch>
        </Page>
    </div>
  );
}

export default App;
