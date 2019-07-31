## 1. Passing method as props from parent component to child component    

__`ParentComponent.js`__

``` JavaScript

import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              // set state parentName whose value is Parent
              parentName : 'Parent'
         }
         // Since this is used inside greetParent method , we need to bind the method with this keyword. 
         this.greetParent = this.greetParent.bind(this)
     }
     
     greetParent(){
         // Template literal - Feature in ES6
         alert(`Hello ${this.state.parentName}`)
     }
     
    render() {
        return (
            <div>
                // Passing method greetParent itself as props to ChildComponent where greetHandler is an attribute
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent
```

_A template literal ( use enclosing back-ticks ( ` ) ) is a way to concatenate strings while allowing embedded expressions and improving readability._    

__`ChildComponent.js`__

``` JavaScript
function ChildComponent(props) {
    return (
        <div>
            // Calling greetParent method of Parent Component
            <button onClick = {props.greetHandler}> Greet Parent </button>
        </div>
    )
    
}
export default ChildComponent
```
## 2. Pass parameter when calling the parent method from child component

Arrow function syntax is the simplest way to pass parameter from child component to parent component.    

__`ChildComponent.js`__

``` JavaScript
function ChildComponent(props) {
    return (
        <div>
            // Calling greetParent method of Parent Component
            // Convert onClick handler into arrow function and pass any number of parameter
             <button onClick = { () => props.greetHandler( 'child' )}> Greet Parent </button>
        </div>
    )
    
}
export default ChildComponent
```    

__`ParentComponent.js`

``` JavaScript

import ChildComponent from './ChildComponent'
class ParentComponent extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              // set state parentName whose value is Parent
              parentName : 'Parent'
         }
         // Since this is used inside greetParent method , we need to bind the method with this keyword. 
         this.greetParent = this.greetParent.bind(this)
     }
     
     //Get parameter from child component
     greetParent(childName){
         // Template literal - Feature in ES6
         alert(`Hello ${this.state.parentName} from ${childName}`)
     }
     
    render() {
        return (
            <div>
                // Passing method greetParent itself as props to ChildComponent where greetHandler is an attribute
                <ChildComponent greetHandler = {this.greetParent} />
            </div>
        )
    }
}
export default ParentComponent

```

