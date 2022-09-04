import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle';

import Nav from './components/page/Template';

import CalcBasic from './components/page/calc/basic';

import ConvUnit from './components/page/conv/unit';
import ConvUnitLength from './components/page/conv/unitlength';
import ConvUnitArea from './components/page/conv/unitarea';
import ConvUnitVolume from './components/page/conv/unitvolume';
import ConvUnitMass from './components/page/conv/unitmass';
import ConvUnitTime from './components/page/conv/unittime';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CalcBasic />}/>
        <Route path="/calculator/basic" element={<CalcBasic />}/>
        <Route path="/converter/unit" element={<ConvUnit />}/>
        <Route path="/converter/unit/length" element={<ConvUnitLength />}/>
        <Route path="/converter/unit/area" element={<ConvUnitArea />}/>
        <Route path="/converter/unit/volume" element={<ConvUnitVolume />}/>
        <Route path="/converter/unit/mass" element={<ConvUnitMass />}/>
        <Route path="/converter/unit/time" element={<ConvUnitTime />}/>
      </Routes>
    </Router>
  );
}

export default App;
