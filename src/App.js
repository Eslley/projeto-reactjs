import logo from './logo.svg';
import './App.css';
import MyComponent from './components/Greet'
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <MyComponent />
      <Welcome />
    </div>
  );
}

export default App;
