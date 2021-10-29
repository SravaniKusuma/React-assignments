import React,{Component} from 'react';

class Welcome extends Component{
    render(){
        const {name,place} = this.props;
        return <h2>Welcome {name} from {place}</h2>
    }
}

export default Welcome;