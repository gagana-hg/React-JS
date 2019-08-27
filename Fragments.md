* __Fragments__ are just like empty jsx tags. They facilitate to group a list of children without adding extra nodes to the DOM.    
* Before the release of React 16, the only way to group child components was by wrapping the children in a `div` or `span`.    

__Without using Fragment tag :__     

`Fragments.js`

```JavaScript
function FragmentDemo() 
{
    return (
            <h1> 
                Fragments demo
            </h1>
            <p> Wrapping inside 'div' tag </p>
    )
}
```
The above code breaks the application with __Parsing error : _Adjacent JSX element must be wrapped in an enclosing tag. Did you want a JSX fragment `<>...</>`?___     

__Enclosing `div` tag :__        

`Fragments.js`    

```JavaScript
function FragmentDemo() 
{
    return (
        <div>
            <h1> 
                Fragments demo
            </h1>
            <p> Wrapping inside 'div' tag </p>
        </div>
    )
}
```
But this `<div>` tag is included in DOM tree.    

__Using Fragment tag :__       

`Fragments.js`  

```JavaScript
function FragmentDemo() 
{
    return (
        <React.Fragment>
            <h1> 
                Fragments demo
            </h1>
            <p> This describes fragement component </p>
        </React.Fragment>
    )
}
```

__Shorter Syntax :__    

`Fragments.js`    

```JavaScript
function FragmentDemo() 
{
    return (
        <>
            <h1> 
                Fragments demo
            </h1>
            <p> This describes fragement component </p>
        </>
    )
}
```    
We can use `<></>` tags which looks like empty tags, the same way you’d use any other element except that it doesn’t support keys or attributes.   

__Child component :__   

`Columns.js`

```JavaScript
function Columns() {
    return (
        <div>
            <td> Topic </td>
            <td> Fragments </td>
        </div>
    )
}

export default Columns
``` 
`Table.js`  

```JavaScript
import Columns from  './Columns'

function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns/>
                </tr>
            </tbody>

        </table>
    )
}

export default Table
```

Call `Table.js` in `app.js`. When we take a look at the console we encounter __Warning : _`<td>` cannot appear as a child of `<div>`___     

__Keyed Fragments :__ Fragments declared with the explicit `<React.Fragment>` syntax may have keys. `key` is the only attribute that can be passed to `Fragment`.        

`Fragments.js`

```Javascript    
function FragmentDemo()  {
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
    return (
        persons.map(person => (
        <React.Fragment key= {person.id}>
        <h1> Name </h1>
        <p> {person.name} </p>
        </React.Fragment>
    )))}

export default FragmentDemo
```    




