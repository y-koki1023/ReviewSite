import React from 'react'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Header() {
    return(
        <div style = {{flexGrow:1}}>
            <AppBar position="static">
                <Toolbar>
                    <Link to = "/">
                        <Typography 
                            variant = "h6"
                            style = {{flexGrow:1}}
                        > 
                            Review Site 
                        </Typography>
                    </Link>
                    <Link to = "/login">
                        <Button color="inherit"> Login </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header