import React, { Component } from 'react'

class  AgeCheck extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             age:15
        }
    }
    
    
    render() {

        return(
            this.state.age >=18 ? <div>Hello {this.props.name} you are eligible to vote</div>: <div>Hello {this.props.name} you are not eligible to vote</div>
        )

        // let message
        // if(this.state.age >=18){
        //     message = <div>Hello {this.props.name} you are eligible to vote</div>
        // }else{
        //     message=<div>Hello {this.props.name} you are  not eligible to vote</div>
        // }
        // return <div>{message}</div>

        // if(this.state.age >=18){
        //     return(<div>Hello {this.props.name} you are eligible to vote</div>)
        // }else{
        //     return(<div>Hello {this.props.name} you are  not eligible to vote</div>)
        // }
        
    }
}

export default AgeCheck
