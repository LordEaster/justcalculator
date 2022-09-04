import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle';

import Nav from './components/page/Template';

import Home from './components/page/Home';
import SimpleCalc from './components/page/SimpleCalc';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<SimpleCalc />}/>
        <Route path="/calculator/basic" element={<SimpleCalc />}/>
      </Routes>
    </Router>
  );
}

export default App;
