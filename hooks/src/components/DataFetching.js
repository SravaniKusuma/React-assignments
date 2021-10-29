import React, { useEffect, useState } from 'react'
import axios from 'axios'

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const[btnId, setBtnId] = useState(1)

    useEffect( () =>{

        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then( res => {
            console.log(res)
            setPost(res.data)
        })
        .catch( err => console.log(err))
    }, [btnId] )
    return (
        <div>
            <input type="text" value={id} onChange={ e => setId(e.target.value)} />
            <button  type="button" onClick={ () => setBtnId(id)}> Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {
                    posts.map( post => <li key={post.id}>{post.title}</li>)
                }
            </ul> */}
        </div>
    )
}

export default DataFetching
