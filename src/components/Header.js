import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider'
import SearchBar from './SearchBar'
import RegisterReview from './RegisterReview'
import "../css/Header.css"


function Header(props) {

    const handleLoggedIn = () => {
        if (props.username !== ""){
            return(
                <Link to = {`/profile/${props.username}`} >
                    <Typography variant = "body1"> {props.username} </Typography>
                </Link>
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
        <div className = "HeaderWrapper" style = {{flexGrow:1}}>
            <AppBar position="relative" >
                <Toolbar>
                    <Link to = "/" underline = "none" style = {{flexGrow:1}}>
                        <Typography variant = "h6" style = {{color: "white"}}> 
                            Review Site 
                        </Typography>
                    </Link>
                    <SearchBar/>
                    <RegisterReview/>
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