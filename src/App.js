import './App.css';

import { NumberPlayers } from './components/number-players';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="container">
      <Navbar />
      <NumberPlayers />
    </div>
  );
}

export default App;
