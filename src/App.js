import apple from './assets/apple.png';
import banana from './assets/banana.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
         Apple and Banana
        </h1>
        <img src={apple} className="logo apple" alt="apple" />
        <img src={banana} className="logo banana" alt="banana" />
      </header>
    </div>
  );
}

export default App;
