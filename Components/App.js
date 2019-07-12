import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent' 
import ClassComponent from './Components/ClassComponent'
import JSX from './Components/JSX'
import Subscribe from './Components/States_01'
import Counter from './Components/Counter'

//we can import with any name(if default export is used) for named export we need to use same name inside braces{}
// import {Greet} from './Components/Greet' 

function App() {
  return (
    <div className="App">
    <FunctionComponent property=": Functional Props Here">
     <p> Here is the child props </p>
     </FunctionComponent>
     <FunctionComponent property=": Functional Second Props Here">
     <button> Action </button>
     </FunctionComponent>
     <ClassComponent property=": Class Props">
     <button> Click Me </button>
     </ClassComponent>
     <ClassComponent property=": Second Class Props"/>
     <JSX/> 
     <Subscribe/>
     <Counter/>
    </div>
  );
}
export default App;
