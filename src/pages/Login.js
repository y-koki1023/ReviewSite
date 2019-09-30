import React, {useState} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgressModal from '../components/ProgressModal'
import { verifyUserInfo } from '../actions/account/Login.js'
import '../css/Login.css'


function Login(props) {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    const handleTextField = (e,type) => {
        switch(type){
            case 'username' :
                if ( e.target.value.match( /[^a-zA-Z0-9_!#%&]/ ) === null){
                    setUserName(e.target.value)
                }
                break
            case 'password' :
                if ( e.target.value.match( /[^a-zA-Z0-9_!#%&]/ ) === null)setPassword(e.target.value)
                break
            default:
        }
    }

    const handleLogin = () => {
        if (props.username !== ""){
            return(
                <Redirect to="/" />
            )
        }
        if (props.requestStatus === 'FAILURE'){
            return(
                <Typography 
                    variant="v3"
                    color = "error"
                > 
                    LOGIN FAILED 
                </Typography>
            )
        }
    }

    return(
        <div className = "LoginWrapper">
            <Header/>
            <Paper className = "LoginBody" >
                {handleLogin()}
                <ProgressModal open={props.isFetching}/>
                <Typography variant="h5"> Login </Typography>
                <div className = "LoginTextBox">
                    <TextField
                        label="Name"
                        value={userName}
                        onChange={(e) => handleTextField(e,'username')}
                        margin="normal"
                    />
                    <TextField
                        label="Password"
                        value={password}
                        type="password"
                        onChange={(e) => handleTextField(e,'password')}
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
        username : state.Login.username,
        requestStatus: state.Login.requestStatus
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (username, password) => dispatch(verifyUserInfo(username,password))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)