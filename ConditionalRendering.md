
Why conditional rendering is required ?    
  When distinct components are created and we need to render these components depending on the state of the application.   

__Following are the different types of conditional rendering__
  1. if/else    
  2. Element Variables    
  3. Conditional ternary operator    
  4. Short circuit operator  

In the example the greeting changes based on `isLoggedIn` value. If its `true` the _Welcome to conditional rendering topic_ is displayed 
else _Thank you_ is displayed. Currently we need to change `isLoggedIn` value manually.

__1. Using if/else :__    

```JavaScript
class ConditionalRender extends Component {
     constructor(props) {
         super(props) 
         this.state = {
              isLoggedIn: true
         }
     }
     
    render() {
        if(this.state.isLoggedIn){
            return (
                <div>Welcome to conditional rendering topic </div>
            )
        }
        else{
            return(
                <div>Thank you</div>
            )
        }
    }
}

export default ConditionalRender
```
__Note :__ Adding if/else statement within JSX is not valid.   

__2. Element Variable :__  We use Javascript variables to store elements. This will also help us to render entire component or part of component.    

```Javascript
class ConditionalRender extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              isLoggedIn: false
         }
     }
     
    render() {

        let message
        if(this.state.isLoggedIn){
           message =  <div>Welcome to conditional rendering topic </div>
        } else {
            message = <div>Thank you</div>
        }
        return <div>{message}</div>
    }
}
export default ConditionalRender
```