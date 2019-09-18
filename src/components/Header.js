import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Header() {
    return(
        <div style = {{flexGrow:1}}>
            <AppBar>
                <Toolbar>
                    <Typography 
                        variant = "h6"
                        style = {{flexGrow:1}}
                    > 
                        Review Site 
                    </Typography>
                    <Button color="inherit"> Login </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header