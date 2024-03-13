import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Header/NavBar/navbar';
import Header from './Components/Header/header';
import Researches from './Components/Researches/researches';
import Programs from './Components/Programs/programs';
import Directions from './Components/Popular directions/directions';
import Blog from './Components/Blog/blog';
import Impressions from './Components/Impressions/impressions';

import 'normalize.css';
import './App.scss';
import './Mixins-and-Defolts/_defolt.scss';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="head">
          <Navbar></Navbar>
          <Header></Header>
        </div> */}
        <div className='research for-indent'>
          <Researches></Researches>
        </div>
        <div className="programs for-indent">
          <Programs></Programs>
        </div>
        <div className="directions for-indent">
          <Directions></Directions>
        </div>
        <div className='blog for-indent'>
          <Blog></Blog>
        </div>
        <div className='ipressions for-indent'>
          <Impressions></Impressions>
        </div>
      </div>
    </Router>
  );
}

export default App;
