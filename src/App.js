import './Mixins-and-Defolts/_defolt.scss';
import 'normalize.css';
import './App.scss';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavBar/navbar';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="head">
          <Navbar></Navbar>
        </div>
      </div>
    </Router>
  );
}

export default App;
