import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/dashboard';
import Services1 from './pages/services-1';
import Services2 from './pages/services-2';
import Services3 from './pages/services-3';
import Aboutus from './pages/aboutus';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path='/services1' element={<Services1/>}/>
          <Route path='/services2' element={<Services2/>}/>
          <Route path='/services3' element={<Services3/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
