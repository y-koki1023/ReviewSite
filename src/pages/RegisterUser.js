import React, {useState} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Checkbox  from '@material-ui/core/Checkbox'
import Button from '@material-ui/core/Button'

import Header from '../components/Header'
import Footer from '../components/Footer'
import {registerUserInfo} from '../actions/account/RegisterUser'
import '../css/RegisterUser.css'

const uuidv1 = require('uuid/v1');

function RegisterUser (props) {
    
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const account_id = uuidv1()
    const [isAgreed, setAgreed] = useState(false)

    const handleTextField = (e,type) => {
        console.log(type)
        switch(type){
            case 'username' : 
                setUserName(e.target.value)
                break
            case 'password' :
                setPassword(e.target.value)
                break
            case 'confirmPassword' :
                setConfirmPassword(e.target.value)
                break
            default:
        }
    }

    return (
        <div>
            <Header/>
            <Paper className = "RegisterUserBody">
                <Typography variant = "h6"> Register </Typography>
                <div className = "RegisterUserBox">
                    <TextField
                        id="standard-helperText"
                        label="Username"
                        value = {userName}
                        helperText="必須"
                        onChange = {(e) => handleTextField(e,'username')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-helperText"
                        label="Password"
                        type="password"
                        value = {password}
                        helperText="必須 8文字以上"
                        onChange = {(e) => handleTextField(e,'password')}
                        margin="normal"
                    />
                    <TextField
                        id="standard-helperText"
                        label="Confirm Password"
                        type="password"
                        value = {confirmPassword}
                        helperText="パスワード確認"
                        onChange = {(e) => handleTextField(e,'confirmPassword')}
                        margin="normal"
                    />
                    <div style = {{display:"flex"}}>
                        <Checkbox
                            checked={isAgreed}
                            onChange={ () => setAgreed(!isAgreed)}
                            value="Agreement"
                            style = {{}}
                        />
                        <Typography variant="body1"> 
                            <a href = "policy"> 利用規約 </a>
                            同意しますか? 
                        </Typography>
                    </div>
                    <Button 
                        disabled = {!isAgreed || password !== confirmPassword || password.length < 8}
                        onClick = {() => props.registerUser(userName, password, account_id)}
                    > 
                        Register 
                    </Button>
                </div>
            </Paper>
            <Footer/>
        </div>
    )
}
const mapStateToProps = state => {
    return{
        requestStatus : state.RegisterUser.requestStatus
    }
}

const mapDispatchToProps = dispatch => {
    return {
        registerUser : (username, password, account_id) => dispatch(registerUserInfo(username,password,account_id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterUser)