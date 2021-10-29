import React from "react";

const Greet = (props) => {

    return(
        <div>
            <h2>Hello {props.name} I am from {props.place}!!!</h2>
            {props.children}
        </div>
    ) 







    // return React.createElement(
    //     'div',
    //     {id:"greet",className:"dummyClass"},
    //     React.createElement('h1',null,"Hello Sravani"))
}

export default Greet