import React from 'react'


class FormDemo extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comments:'',
         topic: 'react'
      }
    }
    

    handleUserNameChange=(event)=>{
        this.setState({
            username: event.target.value
        });
    }
    handleCOmmentsChange=(event)=>{
        this.setState({comments: event.target.value})
    }

    handleTopicChange=(event)=>{
        this.setState({topic:event.target.value})
    }

    handleSubmit=(event)=>{
        alert(`${this.state.username}, ${this.state.comments}`);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text'
                        value={this.state.username}
                        onChange={this.handleUserNameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <input type='textarea'
                        value={this.state.comments}
                        onChange={this.handleCOmmentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select
                        value={this.state.topic}
                        onChange={this.handleTopicChange}>
                    <option value='react'>React</option>
                    <option value='angular'>Angular</option>
                    <option value='vue'>Vue</option>
                            </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        );
    }

}

export default FormDemo;
