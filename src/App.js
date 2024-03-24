import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Navbar from './Components/Header/NavBar/navbar'
import DummyPage from './Pages/DummyPage/dummyPage';

import 'normalize.css';
import './App.scss';
import './Mixins-and-Defolts/_defolt.scss';

function App() {
  return (
    <Router>
      <div className='app'>
        <div className='navbar'>
          <Navbar></Navbar>
        </div>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/dum' element={<DummyPage></DummyPage>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
