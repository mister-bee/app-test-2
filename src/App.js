import apple from './assets/apple.png';
import banana from './assets/banana.png';
import './App.css';

function App() {
  return (
    <div className="App">



      <header className="App-header">
        <h1>The Apples and Bananas Game</h1>
        <h3>How fast can you make them disappear?</h3>
        <img src={apple} className="logo apple" alt="apple" />
        <img src={banana} className="logo banana" alt="banana" />
      </header>
      
    </div>
  );
}

export default App;
