import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import CircularProgress from '@material-ui/core/CircularProgress';
import Modal from '@material-ui/core/Modal'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { verifyUserInfo } from '../actions/account/Login.js'
import '../css/Login.css'


function Login(props) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleUserName = ( e ) => {
        setUserName(e.target.value)
    }
    const handlePassword = ( e ) => {
        setPassword(e.target.value)
    }

    const handleLoggedIn = () => {
        if (props.username !== ""){
            return(
                <Redirect to="/" />
            )
        }
    }

    const displayProgress = () => {
        return  (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={props.isFetching}         
            >
                <CircularProgress 
                    style = {{
                        position:"absolute",
                        top:"50%",
                        left:"50%",
                        border:"none"
                    }}
                />
            </Modal>)
    }

    return(
        <div style= {{ position:"reletive"}}>
            {handleLoggedIn()}
            <Header/>
            <Paper className = "LoginBody" >
                {displayProgress()}
                <Typography variant="h5"> Login </Typography>
                <div className = "LoginTextBox">
                    <TextField
                        label="Name"
                        value={userName}
                        onChange={handleUserName}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        value={password}
                        type="password"
                        onChange={handlePassword}
                        margin="normal"
                    />
                </div>
                <div>
                    <Button onClick = {() => props.login(userName,password)}> Login </Button>
                    <Link 
                        to = "/registerUser"
                        style = {{textDecoration:"none"}}
                    >
                        <Button>
                            Register
                        </Button>
                    </Link>
                </div>
            </Paper>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isFetching : state.Login.isFetching,
        username : state.Login.username
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (username, password) => dispatch(verifyUserInfo(username,password))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)