import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/NavBar/navbar';
import Header from './Components/Header/header';

import 'normalize.css';
import './App.scss';
import './Mixins-and-Defolts/_defolt.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="head">
          <Navbar></Navbar>
          <Header></Header>
        </div>
      </div>
    </Router>
  );
}

export default App;
