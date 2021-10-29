import React from 'react'

type GreetProps = {

    name: string,
    messageCount:number,
    isLoggedIn:boolean,
    fullName :{
        first: string,
        last: string
    },
    namesList:{
        first: string,
        last: string

    }[]


}

const Greet= (props:GreetProps)  => {
    return (
        <div>
            {
                props.isLoggedIn ?  `Hello  ${props.name} !!! You have ${props.messageCount} meassages`: 'Welcome Guest'
            }
            <br/>
            Hello { props.fullName.first} {props.fullName.last}
           {
               props.namesList.map( (name) => <h2>{name.first} {name.last}</h2>)
           }
        </div>
    )
}

export default Greet
