
import { AppBar, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import React from 'react'
import { useHistory } from 'react-router';
import {format} from 'date-fns'

const drawerWidth = 240
const useStyles = makeStyles( (theme) => {

    return {

        page:{
            background: '#f9f9f9',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width: drawerWidth
        },
        drawerPaper:{
            width: drawerWidth
        },
        root:{
            display:'flex'
        },
        title:{
            padding: theme.spacing(2)
        },
        appbar:{
            width:`calc(100%- ${drawerWidth}px)`
        },
        toolbar:theme.mixins.toolbar
    }
})

function Layout({children}) {

    const classes = useStyles()
    const history = useHistory()

    const menuItems = [
        {
            text:'My Notes',
            icon: <SubjectOutlinedIcon color="secondary" />,
            path:'/'
        },
        {
            text:'Create Notes',
            icon: <AddCircleOutlineOutlinedIcon color="secondary" />,
            path:'/create'
        },
    ]
    return (
        <div className={classes.root}>
            <AppBar 
                className={classes.appbar}
                elevation={0}
            >
                <Toolbar className={classes.appbar}>
                    <Typography variant="h5" style={{paddingLeft:240}} >
                        
                            Today is {format(new Date(),'do MMMM Y')}
                        
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer 
                className={classes.drawer}
                variant='permanent'
                anchor='left'
                classes={{paper: classes.drawerPaper}}
            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                            Notes content
                    </Typography>
                </div>
                {/* lists items */}
                <List>
                    {menuItems.map( item =>(
                        <ListItem key ={item.text} button
                            onClick={() => history.push(item.path) }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />

                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}

export default Layout
