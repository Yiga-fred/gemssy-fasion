import React, {useEffect} from 'react';
import axios from './axios'
import Catalog from './components/Catalog'
import './static/scss/App.scss';

function App() {
  useEffect(() => {
    axios.get('/categories').then(({data}) => console.log({data}))
  },[])
  return (
    <div className="App">
     <Catalog/>
    </div>
  );
}

export default App;
