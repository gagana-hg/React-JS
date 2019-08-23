__We can handle forms in React in two ways__    
  1. Uncontrolled  
  2. Controlled  
 
__1. The Uncontrolled__ 
  * Uncontrolled inputs are like traditional HTML form inputs.    
  * They remember what we typed. 
  * We can then get their value using a ref. 
  * We have to pull the value from the field when we need it. This can happen when the form is submitted.    
`Forms.js`

```Javascript
class Forms extends Component {
    handleSubmitClick = () => {
      const name = this._name.value;
     console.log(name)
    }
  
    render() {
      return (
        <div>
          <input type="text" ref={input => this._name = input} />
          <button onClick={this.handleSubmitClick}>Sign up</button>
        </div>
      );
    }
  }
```
__2. The Controlled__   
  * A controlled input accepts its current value as a prop, as well as a callback to change that value.    
  * Every time we type a new character, `onChange` is called. It takes in the new value of the input and sets it in the state.
  * This flow, kind of ‘pushes’ the value changes to the form component, so the Form component always has the current value of the input, without needing to ask for it explicitly. 
  * A form element becomes “controlled” if you set its value via a prop.
  * The form component can respond to input changes immediately.    
  * __Eg :__    
        1. Disabling the button unless all fields have valid data.    
        2. Enforcing a specific input format, like credit card numbers.
    
  `Forms.js`
  
  ```Javascript
  class Forms extends Component {
    constructor() {
      super();
      this.state = {
        name: '',
      };
    }
  
    handleNameChange = (event) => {
      this.setState({ name: event.target.value });
      console.log(this.state.name)
    };
  
    render() {
      return (
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </div>
      );
    }
  }  
  ```    
  
  | __Element__ | __Value property__ | __Change callback__ | __New value in the callback__ |
  |---|---|---|---|
  |`<input type="text" />`|`value="string"	`|`onChange`|`event.target.value`|
  |`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`|
  |`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`|
  |`<textarea />`|`value="string"`|`onChange`|`event.target.value`|
  |`<select />`|`value="option value"`|`onChange`|`event.target.value`|    
  
 Based on the requirement we can choose the type of form.    
  
  |__Feature__|__Uncontrolled__|__Controlled__|
  |---|---|---|
  |one-time value retrieval (e.g. on submit)|:+1: |:+1:|
  |validating on submit|:+1:|:+1:|
  |instant field validation|:-1:|:+1:|
  |conditionally disabling submit button|:-1:|:+1:|
  |enforcing input format|:-1:|:+1:|
  
  

