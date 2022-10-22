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
import LifeCycle from './components/LifeCycle';
import Table from './components/Table';
import PureComp from './components/PureComponent';
import RefsDemo from './components/RefsDemo';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import { UserProvider } from './components/UserContext';
import ComponentA from './components/ComponentA';

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

      {/* <Form /> */}

      {/* <LifeCycle></LifeCycle> */}

      {/* <Table /> */}

      {/* <PureComp /> */}

      {/* <RefsDemo /> */}

      {/* <FRParentInput /> */}

      {/* <PortalDemo /> */}

      {/* <ClickCounter name='Rubem' />
      <HoverCounter /> */}

      <UserProvider value='Rubem'>
        <ComponentA />
      </UserProvider>
    </div>
  );
}

export default App;
