## What is JSX ?  
  * Javascript XML - extension to javascript language syntax.  
  * With react library it's extension to write XML like code for elements and components. 
  * JSX tags have tag name, Attribute, and children.
  
## Why JSX ?  
  * JSX is not a requirement for using React
  * JSX makes code simple and elegent.
 
__The JSX we write inside the react.js is often transpiled to a React.createElement method with the help of babel compiler.__

## Create React element

### With JSX

``` Javascript   
    const thisJsx = () =>
    {
        //Using JSX 
        return (
            <div className = 'dummy'> 
                <h1> This is using JSX </h1>
            </div>
        ) 
     }
 ```

### Without JSX

``` Javascript 
const thisJsx = () =>
{
    return React.createElement('div',{id: 'Value', className:'dummy'},
    React.createElement('h1',null,"This is without JSX"))
}
```

`React.createElement(type, props, ...children)` method takes the three arguments type, props, children.

__type:__ Type of the html element or component. (example : h1, h2, p, button..etc).  
__props:__ The properties object.  
          _Example: {style :{ color:“red”}} or className or event handlers etc._  
__children:__ Anything that needs to be passed between the dom elements.  

* We can put any valid JavaScript expression inside the curly braces {} in JSX.  
* React DOM uses _camelCase_ property naming convention instead of HTML attribute names.  
  For example, class becomes className in JSX

