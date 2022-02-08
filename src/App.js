import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { BastaOptions } from './views/basta-options';
import { BastaGame } from './views/basta-game';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<BastaOptions />} />
          <Route path='/basta-game' element={<BastaGame />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
