import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Seatmap from './components/Seatmap.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Seatmap />
    </div>
  );
}

export default App;
