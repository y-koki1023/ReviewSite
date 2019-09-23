import { combineReducers } from 'redux'
import Login from './account/Login'
import RegisterUser from './account/RegisterUser'
import RegisterReview from './review/RegisterReview'

const rootReducer  = combineReducers({
    Login,
    RegisterUser,
    RegisterReview
})

export default rootReducer