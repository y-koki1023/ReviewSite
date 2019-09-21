import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { verifyUserInfo } from '../actions/account'
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
    return(
        <div style= {{ position:"reletive"}}>
            <Header/>
            <Paper className = "LoginBody" >
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
                        <Button
                            classes = {{color: "white"}}
                        >
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
        account_name : state.account_name
    }
}

const mapDispatchToProps = dispatch => {
    return{
        login: (username, password) => dispatch(verifyUserInfo(username,password))
    }
    
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)