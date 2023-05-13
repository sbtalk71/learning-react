
import React,{Component} from 'react';
class Message extends Component{
    
    constructor(){
        super();
        this.state={
            message:'Welcome Visitor',
            btn_label:'Subscribe'
        }

        this.handleSubscription=this.handleSubscription.bind(this);
    }

    handleSubscription(){
        this.setState({message:'Thank you for Subscribing',btn_label:'Subscribed'})
    }
    render(){
        return (
        <div>
        <h1>{this.state.message}</h1>
        {/*<button onClick={()=>this.handleSubscription()}>{this.state.btn_label}</button>*/}
        <button onClick={this.handleSubscription}>{this.state.btn_label}</button>
        </div>
        )
    }
}

export default Message;