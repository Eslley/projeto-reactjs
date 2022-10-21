import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      
      <Greet name="Rubem">
        <p>Children props</p>
      </Greet>

      <Greet name="Nanfred">
        <button>Action</button>
      </Greet>

      <Welcome name="Chomsky" />

    </div>
  );
}

export default App;
