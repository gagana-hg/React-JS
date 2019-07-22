
__What is state ?__   
  State is plain JS objects to the ReactJS component which holds information about the component.`state` is created within the component.  

### props vs state

|props | state |
| :-----:|:--------:|
| props get passed to the component (similar to function parameters)| state is managed within component (similar to variables declared within a function) |
| props are immutable | state is mutable |
| props  : Functional component | useState Hook : Functional component |
this.props : Class component | this.state : Class component |


__When would you use state ?__  
  When a component needs to keep track of information between renderings the component itself can create, update, and use state.

__React.Component__ is the base class for all class based ReactJS components. Whenever a class inherits the React.Component class, 
it’s constructor will automatically assigns attribute state to the class with intial value set to null. 
We can change it by overriding the method __constructor__.  
*This is where state gets it’s initial value, this can be hard coded (as below) or it can come from props.*   

__`State.js`__

```javascript
    constructor(){
        super()
        this.state = {
            message: 'This sentence will change once you click the button'
        }
```
* `this.state.message` will change once button is clicked. This is done using `setState()`

```javascript
RefreshMessage() {
        this.setState({
            message: 'Sentence changed'
        })
    }
    
    render(){
        return(<div>
            <h1>{this.state.message}</h1>
            <button onClick={()=> this.RefreshMessage()}> Click Here </button>
        </div>)
    }
```

### `setState()`   
 setState() schedules an update to a component’s state object. When state changes, the component responds by re-rendering.

1. Never modify the state directy. If we try to update count value using `this.state.count = this.state.count + 1`, React cannot listen to the state getting updated in this way, so your component will not re-render.
In the UI count value won't change, But we can see the change if we add `console.log(this.state.count)`  
2. Whenever a code has to be executed once the state has been changed, do not place the code right after `setState()` method, Instead place the code within callback function that is passed as second parameter to `setState()` method.  

```javascript
constructor(){
        super()
        this.state={
            counter: 0
        }
    }
    //Increment the count value
    incrementCount(){
        this.setState({
            counter : this.state.counter + 1
        }, ()=> {   //CallBack Function
        
        //Both UI and console value matches
        console.log('CallBack Value ' + this.state.counter)
        })
        
        //Previous value will be displayed
        console.log("Counter : " +  this.state.counter)
    }
    render()
    {
        return( 
            <div>
                <h1> Counter -  {this.state.counter}</h1>
                <button onClick = { ()=>this.incrementCount()}> Increment </button>
            </div>
        )
    }
```
3.  

```javascript
constructor(){
        super()
        this.state={
            counter: 0
        }
    }
    //Increment the count value
    incrementCount(){
        this.setState({
            counter : this.state.counter + 1
        }, ()=> {   //CallBack Function
        
        //Both UI and console value matches
        console.log('CallBack Value ' + this.state.counter)
        })
        
        //Previous value will be displayed
        console.log("Counter : " +  this.state.counter)
    }
    
    incrementFive(){
      this.incrementCount()
      this.incrementCount()
      this.incrementCount()
      this.incrementCount()
      this.incrementCount()
    }
    render()
    {
        return( 
            <div>
                <h1> Counter -  {this.state.counter}</h1>
                <button onClick = { ()=>this.incrementFive()}> Increment </button>
            </div>
        )
    }
    
```  
Whenever the above code is executed, When button is clicked, Counter value should increment from 0 to 5, but the value changes to 1 instead of 5.
In the console 0 is logged 5 times and even callback value is logged 5 times. This is because react may group multiple `setState()` calls into a single update for better performance. 
__Whenever we want to update state based on previous state, we need to pass function as argument to `setState()`method instead of passing in an object. Function has access to previous state.__

Modifying the above code. Instead of using current `state` we use previous state `prevState`   

```javascript

    incrementCount(){
        this.setState(prevState = > ({
            counter : prevState.counter + 1
        })) 
    }
    
```
