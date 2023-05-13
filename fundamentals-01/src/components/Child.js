import React from 'react';

export class Child extends React.Component{

    constructor(props) {
      super(props)
    
    }
    
    render(){
        return(
            <button onClick={this.props.greet}>get Greeting from Parent</button>
        )
    }
}

