import React, { Component } from 'react'

class ChildComp extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.greetMethod('Sravni')}>Greet Parent</button>
            </div>
        )
    }
}

export default ChildComp
