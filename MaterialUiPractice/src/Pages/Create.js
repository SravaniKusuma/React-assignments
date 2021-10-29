import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import { ButtonGroup } from '@mui/material';
import { Container, FormControl, FormControlLabel} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { makeStyles } from '@mui/styles';
import { TextField } from '@mui/material';
import { Radio } from '@mui/material';
import { RadioGroup } from '@mui/material';
import { FormLabel } from '@mui/material';
import { useHistory } from 'react-router';



const useStyles = makeStyles( {
    btn:{
        backgroundColor: 'red',
        fontSize: 20,
        '&:hover':{
            backgroundColor:'green'
        }
    },
    title:{

        textDecoration: 'underline',
        marginBottom: 20
    },
    field:{
        marginTop: 20,
        marginBottom:20,
        display:'block',
       
    },
    inp:{
        marginBottom:30
    }
})



function Create() {
    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [ category, setCategory] = useState('remainders')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()
        if(title && details){
            fetch('http://localhost:8000/notes',{
                method: 'POST',
                headers: {"Content-type":"application/json"},
                body: JSON.stringify({title,details,category})
            })
            .then( () => history.push('/'))
            
        }
    }
    return (
        <Container>
            <Typography  className={classes.title} variant="h6" component="h2"  gutterBottom  >
                    Create a Note
            </Typography>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                <TextField 
                    onChange={ e => setTitle(e.target.value)}
                    className = {classes.field}
                    style={{marginBottom:20}}
                    label='Note Title'
                    variant='outlined'
                    fullWidth
                    required
                /><br/>
                
                <TextField 
                    onChange = { e => setDetails(e.target.value)}
                    className={classes.field}
                    label='Details'
                    variant='outlined'
                    fullWidth
                    required
                    multiline
                    rows={4}
                /><br/>
                <FormControl className={classes.field} align='left'  >
                    <FormLabel  align='left'>Category</FormLabel>
                    <RadioGroup value={category} onChange={ e => setCategory(e.target.value)}>
                        <FormControlLabel  value="remainders" control={<Radio />} label="Remainder" />
                        <FormControlLabel  value="work" control={<Radio />} label="Work" />
                        <FormControlLabel  value="todos" control={<Radio />} label="Todo" />
                    
                    </RadioGroup>
                </FormControl>
                <br />
                <Button  endIcon={<SendIcon />}  type="submit"  variant="contained" color="primary">Send</Button>

            </form>
            <br />

            
        </Container>
    )
}

export default Create
