# Destructuring   
* Feature in ES6 which makes it possible to unpack values from array or properties from object into distinct variables.  
* Improves code readability

### In Functional component    

__1. In Function Parameter__    
```JavaScript

 //const Greet = props =>
 //Destructuring
 const Greet = ({firstName,lastName}) => 
  {
      return (
              <h1> 
                  //First Name {props.firstName} Last Name {props.lastName}
                  //Instead of using props.firstName We can simply use firstName
                  First Name {firstName} Last Name {lastName}
              </h1>
      )
  }
```

__2. In Function Body__

```JavaScript
 const Greet = props =>{
    // Destructuring - Extracting firstName, lastName properties from props object.
    const {firstName, lastName} = props
     return (
              <h1> 
                  First Name {firstName} Last Name {lastName}
              </h1>
      )
  }
```
### In Class component    

__In Render method__

``` JavaScript
class welcome extends Component
{
    render(){
    //Destructuring of props
    const {firstName,lastName} = this.props
    
    //Destructuring of state
    const {state1, state2 } = this.state
        return(
            <div>
                // Instead of this.props.firstName we can use firstName
                <h1> First Name {firstName} Last Name {lastName}
                
                // Instead of this.state.state1 we can use state1
                <h1> {state1}
            </div>
        )
    }
}
```
