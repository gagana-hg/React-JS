import React from 'react'

//function Greet()
//{
//  return <h1> Hey You </h1>
//}

//Arrow function of ES6
const Greet = props => 
{
    console.log(props)
    return (
        <div>
            <h1> 
                Function Component {props.property}
            </h1>
            {props.children}
        </div>
    )
}


//Named export we need to import with same name
//export const Greet = () => <h1> Hey You</h1>

//Default export
export default Greet