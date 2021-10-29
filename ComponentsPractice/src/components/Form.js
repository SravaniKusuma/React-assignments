import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments:'',
             topic:'react'
        }
    }

    changeUserName = (event) =>{
        console.log("heee")
        this.setState({
            username: event.target.value
        })
    }

    handleComments = (event) =>{

        this.setState({
            comments: event.target.value
        })

    }
    handleTopic = (event) =>{

        this.setState({
            topic: event.target.value
        })



    }

    handleSubmit = event =>{

        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:</label>
                    <input type="text"  value={this.state.username} onChange={this.changeUserName}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={this.state.topic} onChange={this.handleTopic}>
                        <option value="React">React</option>
                        <option value="Angular">Angular</option>
                        <option value="Spring">Spring</option>
                    </select>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}

export default Form
