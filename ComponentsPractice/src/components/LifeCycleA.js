import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name:'Sravani'
        }
        console.log("Lifecycle A constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("lifecycleA  getDerivedStateFromProps")
        return null
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount ")
    }

    shouldComponentUpdate(){
        console.log("LifecycleA  shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA  getSnapshotBeforeUpdate")
        return null
    }
    
    componentDidUpdate(){
        console.log("LifecycleA  componentDidUpdate")
    }

    changeState = () =>{

        this.setState({
            name:'Soumya'
        })
    }

    render() {
        console.log("LifecycleA render")
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeState}>Change State</button>
                <LifeCycleB />
                
            </div>
        )
    }
}

export default LifeCycleA
