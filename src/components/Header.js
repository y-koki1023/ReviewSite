import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SearchBar from './SearchBar'

function Header() {
    return(
        <div style = {{flexGrow:1}}>
            <AppBar position="relative" >
                <Toolbar>
                    <Link 
                        to = "/" 
                        style = {{flexGrow:1, textDecoration:"none"}}
                        underline = "none"
                    >
                       
                            <Typography 
                                variant = "h6"
                                style = {{color: "white"}}
                            > 
                                Review Site 
                            </Typography>
                        
                    </Link>
                    <SearchBar/>
                    <Link 
                        to = "/login"
                        style = {{textDecoration:"none"}}
                    >
                        <Button> Login </Button>
                    </Link>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Header