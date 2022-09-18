import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle';

import Nav from './components/page/Template';

import CalcBasic from './components/page/calc/basic';
import Scientific from './components/page/calc/scientific';
import GCDLCM from './components/page/calc/GCDLCM';
import MatrixAdd from './components/page/calc/MatrixAdd';
import MatrixSub from './components/page/calc/MatrixSub';
import MatrixMulti from './components/page/calc/MatrixMulti';
import MatrixTranspose from './components/page/calc/MatrixTransp';

import ConvUnit from './components/page/conv/unit';
import ConvUnitLength from './components/page/conv/unitlength';
import ConvUnitArea from './components/page/conv/unitarea';
import ConvUnitVolume from './components/page/conv/unitvolume';
import ConvUnitMass from './components/page/conv/unitmass';
import ConvUnitTime from './components/page/conv/unittime';
import ConvBase from './components/page/conv/base';

import Graphing from './components/page/tools/graphing';

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<CalcBasic />}/>

        <Route path="/calculator/basic" element={<CalcBasic />}/>
        <Route path="/calculator/scientific" element={<Scientific />}/>
        <Route path="/calculator/GCDLCM" element={<GCDLCM />}/>
        <Route path="/calculator/matrix/addition" element={<MatrixAdd />}/>
        <Route path="/calculator/matrix/subtraction" element={<MatrixSub />}/>
        <Route path="/calculator/matrix/multiplication" element={<MatrixMulti />}/>
        <Route path="/calculator/matrix/transpose" element={<MatrixTranspose />}/>

        <Route path="/converter/unit" element={<ConvUnit />}/>
        <Route path="/converter/unit/length" element={<ConvUnitLength />}/>
        <Route path="/converter/unit/area" element={<ConvUnitArea />}/>
        <Route path="/converter/unit/volume" element={<ConvUnitVolume />}/>
        <Route path="/converter/unit/mass" element={<ConvUnitMass />}/>
        <Route path="/converter/unit/time" element={<ConvUnitTime />}/>
        <Route path="/converter/base" element={<ConvBase />}/>

        <Route path="/graphing" element={<Graphing />}/>
      </Routes>
    </Router>
  );
}

export default App;
