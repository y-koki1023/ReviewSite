import { combineReducers } from 'redux'
import Login from './account/Login'
import RegisterUser from './account/RegisterUser'

const rootReducer  = combineReducers({
    Login,
    RegisterUser
})

export default rootReducer