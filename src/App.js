import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { BastaContextProvider } from './context/bastaContext';

import { Navbar } from './components/navbar';
import { BastaOptions } from './views/basta-options';
import { BastaGame } from './views/basta-game';

import './App.css';

function App() {
  return (
    <div className="container">
      <BastaContextProvider>
        <Navbar />
        <Router>
          <Routes>
            <Route path='/' element={<BastaOptions />} />
            <Route path='/basta-game' element={<BastaGame />} />
          </Routes>
        </Router>
      </BastaContextProvider>
    </div>
  );
}

export default App;
