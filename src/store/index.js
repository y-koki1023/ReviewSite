import { combineReducers } from 'redux'
import Login from './account/Login'
import RegisterUser from './account/RegisterUser'
import RegisterReview from './review/RegisterReview'
import GetReview from './review/GetReview'

const rootReducer  = combineReducers({
    Login,
    RegisterUser,
    RegisterReview,
    GetReview
})

export default rootReducer