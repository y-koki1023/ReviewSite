import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar'



function Header(props) {

    const handleLoggedIn = () => {
        if (props.username !== ""){
            return(
                <Typography variant = "body1"> {props.username} </Typography>
            )
        }else{
            return(
                <Link 
                    to = "/login"
                    style = {{textDecoration:"none"}}
                >
                    <Button> Login </Button>
                </Link>
            )
        }
    }

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
                    {handleLoggedIn()}
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

const mapStateToProps = state => {
    return{
        username: state.Login.username
    }
}

export default connect(mapStateToProps)(Header)