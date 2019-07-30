* React events are named using camelCase.
* Event handler is a function and not a function call.

## Functional Component
``` javascript
function FunctionalClick() {
    function clickHandler(){
        console.log('Button Clicked')
    }
    return (
        <div>
            <button onClick = {clickHandler}> Click Me </button>
        </div>
    )
}
```
## Class Component

``` javascript
class ClassClick extends Component {
    clickHandler(){
        console.log('Button clicked')
    }
    render() {
        return (
            <div>
                <button onClick = {this.clickHandler}> Click Me </button>
            </div>
        )
    }
}
```

## Event Binding

`this` is an object that is executes the current function.    
 To understand about how `this` keyword works [Check Here](https://youtu.be/AOSYY1_np_4 "YouTube")

``` Javascript
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    clickHandler(){
        // setState() inside event handler breaks the application
        this.setState({
            message : 'Have a Good Day'
        })
        // this keyword is undefined in event handler, that is the reason event binding is necessary in react component
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick = {this.clickHandler} > Click </button>
            </div>
        )
    }
}

```

Different ways of binding event handler

__1. Using `bind` keyword in render method__

``` Javascript
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    clickHandler(){
        this.setState({
            message : 'Have a Good Day'
        })
        //refers to EventBind component
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick = {this.clickHandler.bind(this)}> Click </button>
            </div>
        )
    }
}

```
Using this method, every update to the state will cause component to re render. This will generate new event handler on every render. This can cause performance issue in large application.    

__2. Arrow function in render method__    

``` Javascript
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    clickHandler(){
        this.setState({
            message : 'Have a Good Day'
        })
        //refers to EventBind component
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick = {() => this.clickHandler() }> Click </button>
            </div>
        )
    }
}
```

__3. Binding the event handler in constructor__

``` Javascript
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message : 'Have a Good Day'
        })
        //refers to EventBind component
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick = {this.clickHandler()}> Click </button>
            </div>
        )
    }
}

```

__4. Use arrow function as class property__

``` Javascript
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'Hello'
        }
    }
    
    clickHandler = () => {
        this.setState({
            message : 'Have a Good Day'
        })
    }
    
    render() {
        return (
            <div>
                <div> {this.state.message} </div>
                <button onClick = {this.clickHandler()}> Click </button>
            </div>
        )
    }
}

```
