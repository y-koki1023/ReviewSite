import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button  from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../css/Login.css'


function Login() {
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
                    <Button> Login </Button>
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

export default Login