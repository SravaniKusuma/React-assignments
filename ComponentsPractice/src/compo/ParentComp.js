import React, { Component } from 'react'
import ChildComp from './ChildComp'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             parentName: "Sridevi"
        }
        this.greetParent = this.greetParent.bind(this);
    }

    greetParent(childName){

        alert(`Hello ${this.state.parentName} your daughter is ${childName}`)

    }
    
    render() {
        return (
            <div>
                <ChildComp  greetMethod = {this.greetParent} />
            </div>
        )
    }
}

export default ParentComp
