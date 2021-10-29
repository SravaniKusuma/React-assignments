import { Grid} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import NoteCard from '../components/NoteCard'

function Notes() {

    const [notes , setNotes] = useState([])

    

    useEffect( () => {
        fetch('http://localhost:8000/notes')
        .then( res => res.json())
        .then( data =>  setNotes(data))
    },[])

    const handleDelete =  async (id) => {

        await fetch('http://localhost:8000/notes/'+id ,{
            method: 'DELETE'
        })
        const newNotes = notes.filter( note => note.id != id)
        setNotes(newNotes)
    }
    
    return (
        <div>
            <Grid container spacing={3}>
            {
                notes.map( note => (
                     < Grid item key={note.id} xs={12}  md={6} lg={3}>
                         <NoteCard note ={note} handleDelete={handleDelete}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Notes
