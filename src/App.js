import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import PersonList from './components/PersonList';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      
      {/* <Greet name="Rubem">
        <p>Children props</p>
      </Greet>

      <Greet name="Nanfred">
        <button>Action</button>
      </Greet> */}

      {/* <Welcome name="Chomsky" /> */}

      {/* <Message /> */}

      {/* <Counter value="3" /> */}
      
      {/* <EventBind /> */}

      {/* <ParentComponent /> */}

      {/* <PersonList /> */}

      <Form />

    </div>
  );
}

export default App;
