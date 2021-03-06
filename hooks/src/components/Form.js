import React,{useState} from 'react'

function Form() {

    const [name, setName] = useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={ e => setName({...name,firstName:e.target.value})}></input>
                <input type ="text" value={name.lastName} onChange={ e => setName({...name,lastName: e.target.value})}></input>
            </form>
            <h2>Your firstName is: {name.firstName}</h2>
            <h2>Your lastName is: {name.lastName}</h2>
        </div>
    )
}

export default Form
