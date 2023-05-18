import React from 'react';

export class Child extends React.Component{

    
    render(){
        return(
            <button onClick={this.props.greet}>get Greeting from Parent</button>
        )
    }
}

