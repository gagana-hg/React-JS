__List rendering is performed using built in JavaScript `map()` method.__     

The `map()` method creates a new array with the results of calling a provided function on every element in the calling array.

If `map()` is not used.    

```ListRenderning.js```
```Javascript
function ListRendering() {
    const names = ['MS Dhoni','Virat','Rohit']
    return (
        <div>
            <h2>{names[0]}</h2>
            <h2>{names[1]}</h2>
            <h2>{names[2]}</h2>            
        </div>
    )
}
export default ListRendering
```

Using `map()` method

``` Javascript
//Option 1
//Braces are required since map() method evaluates. If Braces are not included Unterminated regular expression error is occured.

function ListRendering() {
    const names = ['MS Dhoni','Virat','Rohit'] 
    return (
        <div>      
        {          
          names.map(name => <h2>{name}</h2>)
        }     
        </div>
    )
} 


 //Option 2 - To keep return statement simple
function ListRendering() {
    const names = ['MS Dhoni','Virat','Rohit']       
    const nameList = names.map(name => <h2>{name}</h2>)

    return (
        <div>
            {nameList}
        </div>
    ) 
}

export default ListRendering
``` 

__When we have list of objects and need to render properties of objects, It's always a better to refactor the JSX into seperate component and use the component in `map()` method of JSX.__    

`NameList.js`

```Javacript
function NameList() {
    const persons = [
        {
            id : 1,
            name : 'Dhoni',
            age : 35,
            skils : 'Keeper'
        },
        {
            id : 2,
            name : 'Virat',
            age : 30,
            skils : 'Captian'
        },
        {
            id : 3,
            name : 'Rohit',
            age : 32,
            skils : 'Batsman'
        },
        {
            id : 4,
            name : 'Hardik',
            age : 29,
            skils : 'Bolwer'
        }
    ]
    //passing person as props to Person.js
    const personList = persons.map(person => <Person person = {person} />)
    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
```
`Person.js`

```Javascript
function Person({person}) {
    return (
        <div>
            <h2>
                I am {person.name}. I am {person.age} years old. I know {person.skill}
            </h2>
        </div>
    )
}

export default Person
```
In `app.js` call `NameList` function.   
NameList component is responsible only for rendering the list.    
Person component is responsible for rendering person HTML.   

The above way of rendering the list works fine. But when we check the console we encounter a __warning.__ `Each child in an array or iterator should have a unique 'key' prop`. This simply means a key should be provided for list items. 
* A `key` is a special string attribute you need to include when creating lists of elements.   
* Keys help React identify which items have changed, are added, or are removed.    
* Keys should be given to the elements inside the array to give the elements a stable identity.   
* Helps in efficient update of UI.    
* The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often we would use IDs from our data as keys.    

`NameList.js`

```JavaScript
//Passing ID as Key to the child component
const personList = persons.map(person => <Person key = {person.id} person = {person} />)
```
* Key props are not accessible in the child component. A __warning__ in console can be seen `'key' is not a prop. Trying to access it will result in 'undefined' being returned. If you need to access the same value within the child component, you should passit as different prop.`    

## Index as key is an Anti-pattern
* A key is the only thing React uses to identify DOM elements.    
__What happens if we push an item to the list or remove something in the middle?__     
        If the key is same as before React assumes that the DOM element represents the same component as before. But that is no longer true.    
* When nothing is passed React uses the index as key because it is the best guess at the moment. But a warning is displayed in the console.      

`ListRendering.js`

```Javascript
function ListRendering() {
    const names = ['MS Dhoni','Virat','Rohit']       
    //Using index as key
    const nameList = names.map((name,index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {nameList}
        </div>
    ) 
}
```
__When should we use Index as key?__
* The items in the list do not have a unique ID.    
* The list is a static list and will not change.   
* The list will never be reordered or filtered.    






