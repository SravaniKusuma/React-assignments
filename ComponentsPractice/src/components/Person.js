import React from 'react'

function Person({person}) {
    return (
        <div>
            
            <h3>I am {person.name} and my job is {person.job}</h3>
        </div>
    )
}

export default Person
