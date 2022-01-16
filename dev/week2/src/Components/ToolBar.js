import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

function Mui() {
    return (         
        <AppBar style = {{backgroundColor: "rgba(0, 0, 0, 0.3"}} position="static">
            <Toolbar>
                <Typography>UIT-LAB</Typography>
                <Link to = "/" style={{color: "blue", marginLeft: '3%'}} variant='text' >Main</Link>
                <Link to = "login" style={{color: "blue", marginLeft: '1%'}} variant='text'>Login</Link>
                <Link to = "/nothing" style={{color: "blue", marginLeft: '1%'}} variant='text'>Nothing</Link>
                <Typography sx={{flexGrow: 1}}></Typography>
                <Button style={{color: "inherit"}}>Login</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Mui
