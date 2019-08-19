### Different ways of styling react component    
  1. CSS Stylesheet    
  2. Inline Styling    
  3. CSS Modules    
  4. Styled Components Library (Not discussed)    
  
__1. CSS Stylesheet :__    
  &nbsp; &nbsp;&nbsp; &nbsp;    Create a CSS file and import it in React.    
   
`myStyles.css`
   
 ```css
   .primary{
    color: red;
  }
``` 

`StyleSheet.js`

```Javascript
function StyleSheet() {
    return (
        <div>
           <h1 className = 'primary'>Stylesheet</h1> 
        </div>
    )
}
```  

We can also apply styles based on condtions `styleSheet.js`   

```Javascript
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
           <h1 className = {className}> Stylesheet</h1> 
        </div>
    )
}
```   

Passing props from `app.js`   

```Javascript
<Stylesheet primary = {true}/>    
```    
 Based on the value passed from `app.js` the font color changes.   
 
__Multiple CSS in React using Template literals__

`myStyles.css`

```css
.primary{
    color: blueviolet;
}

.font-xl{
    font-size: 72px;
}
```  

`StyleSheet.js`

```Javascript
function StyleSheet(props) {
    return (
        <div>
           <h1 className={`primary font-xl`}> Stylesheet</h1> 
        </div>
    )
}
```
__Condtional Styling__  `StyleSheet.js`    

```Javascript
function StyleSheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
           <h1 className={`${className} font-xl`}> Stylesheet</h1> 
        </div>
    )
}
``` 

__2. Inline Styling :__    
&nbsp; &nbsp;&nbsp; &nbsp;    In React, inline styles are not specified as a string. Instead they are specified with an object whose __key__ is the __camelCased__ version of the style name, and whose value is the style’s value, usually a string.   

`Inline.js`

```Javascript
const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
    return (
        <div>
            <h1 style= {heading}> Inline Styling </h1>
        </div>
    )
}
```

__3. CSS Module :__    
&nbsp; &nbsp;&nbsp; &nbsp;    Available with `react-scripts` version 2 or higher. Check the version in `package.json`    
&nbsp; &nbsp;&nbsp; &nbsp;    ___A CSS Module is a CSS file in which all class names are scoped locally by default.___        

`appStyles.module.css`

```css
.primary {
    color: blue;
}
.fontxl{
    font-size: 72px;
}
 ```
 
 `AppStyles.js`
 
  ```JavaScript
import React from 'react'
import styles from './appStyles.module.css'

  function AppStyles() {
    return (
        <div>
            <h1 className={`${styles.fontxl} 
            ${styles.primary}`}> CSS Module</h1> 
        </div>
    )
}
 ```


