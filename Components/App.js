import React from 'react';
import logo from './logo.svg';
import './App.css';
import FunctionComponent from './Components/FunctionComponent' 
import ClassComponent from './Components/ClassComponent'

//We can import with components by any name if default export is used, 
//For named export we need to use same name inside braces{}
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
     </div>
  );
}
export default App;
