import logo from './logo.svg';
import './App.css';
import { Todo } from './components/Todo';
import { Stopwatch } from './components/Stopwatch';
import { useState } from 'react';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      {/* <Todo/> */}
      {show ? <Stopwatch start={5} end={15}/> : ""}
      <button onClick={()=> {
        setShow(show ? false : true);
      }}>{show ? "Hide Timer" : "Show Timer"}</button>
    </div>
  );
}

export default App;
