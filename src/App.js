import './App.css';
import Context from './Context';
import CounterDisplay from './CounterDisplay';

function App() {
  return (
    <div className="App">
      <Context>
        <CounterDisplay />
      </Context>
    </div>
  );
}

export default App;
