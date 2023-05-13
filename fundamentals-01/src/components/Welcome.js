import React, { Component } from 'react'

export class Welcome extends Component{
    render(){
        return <h1>Welcome to React {this.props.name}</h1>
    }
}
