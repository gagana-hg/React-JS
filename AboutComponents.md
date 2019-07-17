# __Components:__ 

  * Building blocks
  * Represents a part of UI
  * Reusable with different properties e.g.: one sideNav for left and right
  * One component can contain another component e.g.: App component contain other components
  * Components are placed inside JS file (e.g.: App Component is placed in **App.js** file)  
 
 ## __Two types of components__:  
 
 ### __Functional:__  
 
* Stateless, return HTML tag
* Accepts props as argument and return valid JSX.
* Specify as custom HTML tag.
* If there is no content use closing tag.
* Use arrow function
         
`FunctionalComponent.js`

 ```javascript
    import React from 'react'

    //Simple Functional component
    function Greet()
    {
      return <h1> Hello user </h1>
    }
   
   
    //Using Arrow function of ES6
    const Greet => 
    {
        return (
            <div>
                <h1> 
                    Hello user
                </h1>
            </div>
        )
    }
    
    export default Greet
 ```

   
### __Class:__  

  * Statefull, ES6 classes which extends Component class, must contain Render method which will return HTML.
  * Can maintain private internal state.
  * We need to import 2 classes from react - react and component class.
  * Implement render method which will return null or HTML.

      `ClassComponent.js`

      ```JavaScript          
      import React, { Component } from 'react'
      class welcome extends Component
      {
          render()
          {
              return( 
                  <div>
                      <h1> Hello user</h1>
                  </div>
              )
          }
      }
      export default welcome

      ```
          
      `App.js`
      
      ```Javascript

      import React from 'react';
      import logo from './logo.svg';
      import './App.css';
      //Importing user defined component
      import FunctionComponent from './Components/FunctionComponent' 
      import ClassComponent from './Components/ClassComponent'

      function App() {
      return (
        <div className="App">
        //Calling components
        <FunctionComponent/>
        <ClassComponent/>
       </div>
          );
      }
      export default App;
      ```
