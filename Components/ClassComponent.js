//Class component example

import React, { Component } from 'react'

class welcome extends Component
{
    render()
    {
        //Destructuring of props //{this.props.children} instead we can just use {children}
        const {property, children} =  this.props
        return( 
            <div>
                <h1> Class Compoment  {property}</h1>
                {children}  
                
            </div>
        )
    }
}

export default welcome