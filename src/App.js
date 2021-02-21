import axios from "./axios";
import {useEffect} from 'react'
import './static/scss/App.scss';

function App() {
  useEffect(() => {
axios.get('/categories').then(({data}) => console.log({data}))
  },[])
  return (
    <div className="App">
      <p>loaded</p>
    </div>
  );
}

export default App;
