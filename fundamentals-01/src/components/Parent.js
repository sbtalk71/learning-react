
import React from 'react';
import {Child} from '../components/Child'

export class Parent extends React.Component{

    greetFromParent(){
        alert('Hello from Parent')
    }

    render(){
        return(
            <Child greet={this.greetFromParent}/>
        )
    }
}

