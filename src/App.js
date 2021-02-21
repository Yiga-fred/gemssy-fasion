import React, {useReducer} from 'react';
import CatalogsContext from './context'
import catalogsReducer, {initialState} from './reducers'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Catalog from './components/Catalog'

import Header from './components/Header';
import './static/scss/App.scss';

function App() {
  const [state, dispatch] = useReducer(catalogsReducer, initialState)
  return (
    <CatalogsContext.Provider value={{state, dispatch}}>
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
          <Route exact path="/:product">
            <p>product</p>
          </Route>
        </Switch>
    </div>
    </Router>
    </CatalogsContext.Provider>
  );
}
export default App;
