import { Avatar, Card, CardContent, CardHeader, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { makeStyles } from '@mui/styles';
import { green, pink, yellow } from '@mui/material/colors';

const useStyles = makeStyles({
    test:{
        border: (note) => {
            if(note.category ==='work')
                return '1px solid blue'
        }
    },
   
})

function NoteCard({ note , handleDelete }) {
    const classes = useStyles(note)
    return (
        <div>
           <Card elevation={1} >
               <CardHeader
               avatar={
                   <Avatar style={{backgroundColor:'#FF9292'}}>
                       {
                           note.category[0].toUpperCase()
                       }
                    </Avatar>
               }
               action={
                    <IconButton  onClick= { () => handleDelete(note.id)}>
                        <DeleteOutlinedIcon />
                    </IconButton>
                }
                title={note.title}
                subheader={note.category}
               />
               <CardContent>
                   <Typography variant="body2" color="textSecondary">
                       {note.details}
                   </Typography>
               </CardContent>
           </Card>
        </div>
    )
}

export default NoteCard
