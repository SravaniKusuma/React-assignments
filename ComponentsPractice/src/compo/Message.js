import React,{Component} from 'react'

class Message extends Component{

    constructor(){
        super();
        this.state={
            message: "Welcome Visitor"
        }
        /*this.changeMessage = this.changeMessage.bind(this)*/
    }
    changeMessage(){
        this.setState({
            message:"Thanks for Subscribing!!!"
        })
    }

    render(){
        return (
            <div>
                    <h5>{this.state.message}</h5>
                    <button onClick={() => this.changeMessage()}>Subscribe</button>
                    {/*<button onClick={this.changeMessage.bind(this)}>Subscribe</button>*/}
                    {/*<button onClick={this.changeMessage}>Subscribe</button>*/}
            </div>
        )
    }
}

export default Message;