import React, {useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import axios from './axios'
import Catalog from './components/Catalog'

import Header from './components/Header';
import './static/scss/App.scss';

function App() {
  useEffect(() => {
    axios.get('/categories').then(({data}) => console.log({data}))
  },[])
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
          <Route exact path="/">
            <Catalog />
          </Route>
          <Route exact path="/favorites">
            <p>Favorites</p>
          </Route>
        </Switch>
    </div>
    </Router>
  );
}
export default App;
