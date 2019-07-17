# Understanding props and state in React  

* React controls the data flow in the components with state and props.  
* The data in states and props are used to render the Component with dynamic data.

## props  

* This simply is shorthand for properties.  
* props are equivalent to parameters of a pure javascript function.
* props are immutable ie. their value cannot be changed. Because these are developed in the concept of __pure functions__.
* props are mentioned as attributes during component invocation. 
* react will bundle all attributes into object which we by convention call props
* In Class component we access props using `this` keyword

`FunctionalComponent.js`

``` Javascript
  const Greet = props => 
  {
      console.log(props)
      return (
              <h1> 
                  First Name {props.firstName} Last Name {props.lastName}
              </h1>
      )
  }
  
```

`App.js`
``` Javascript
function App() {
  return (
    <div className="App">
    <FunctionComponent firstName="Mark" lastName = "Zuckerberg"/>
    <FunctionComponent firstName="Priscilla" lastName = "Chan"/>
    </div>
  );
}

```  

## About `props.children` 

 
* __When to use__ : Sometimes when have no idea about what content has been passed in, but we want the component to render that unknown content.  

* __How to specify the unknown content__ : This content is specified between opening and closing tags of invoking a component. And we retreive it using reserved children property of props object.  

`FunctionalComponent.js`

``` Javascript
  const Greet = props => 
  {
      console.log(props)
      return (
          <div>
              <h1> 
                  Hey {props.name}
              </h1>
              {props.children}
          </div>
      )
  }
  
```

`App.js` 

``` Javascript
function App() {
  return (
    <div className="App">
    <FunctionComponent name="Mark">
    <p> This is the child props example </p>
    </FunctionComponent>
    </div>
  );
}

```  
* While using `props.children` it is necessary to use `<div>` tag ,this is because JSX must contain only one wrapper element to return.  

`ClassComponent.js`

``` Javascript  

class welcome extends Component
{
    render(){
        return(
            <div>
                <h1> Hey {this.props.name}</h1>
                {this.props.children}  
            </div>
        )
    }
}

```

`App.js`  

``` Javascript
function App() {
  return (
    <div className="App">
    <ClassComponent name="Mark">
    <p> This is the child props example </p>
    </ClassComponent>
    </div>
  );
}

```   





