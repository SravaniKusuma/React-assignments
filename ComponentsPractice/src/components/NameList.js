import React from 'react'
import Person from './Person'

const NameList = () => {
    // const names = ["Sravani","Sagar","Thrisha","Sweety"]
    // const namelist = names.map( (name,index) => <h3 key={index}>{name}</h3>)
    const persons =[
        {
            id:1,
            name:"Sravani",
            job:"engineer"
        },
        {
            id:2,
            name:"Thrisha",
            job:"Doctor"
        },
        {
            id:3,
            name:"Harry",
            job:"Teacher"
        }
    ]
    const personlist = persons.map( (person) => <Person  key={person.id} person={person} />)
    return <div>{personlist}</div>
    //return <div>{namelist}</div>
}

export default NameList
