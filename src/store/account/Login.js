import {GET_LOGIN_REQUEST, VERIFY_LOGIN_SUCCESS, VERIFY_LOGIN_FAILURE, GET_LOGIN_FAILURE} from '../../actions/account/Login.js'

const initialState = {
    account_id: "",
    username : "",
    isFetching : false
}

const LoginReducer =  (state = initialState, action) => {
    switch(action.type){
        case GET_LOGIN_REQUEST :
            return {...state, isFetching : true}
            
        case VERIFY_LOGIN_SUCCESS :
            console.log(action.posts)
            return {...state, 
                isFetching : false, 
                account_id: action.posts.account_id,
                username: action.posts.username
            }
        case VERIFY_LOGIN_FAILURE :
            return {...state, 
                isFetching : false, 
                error : "wrong username or password" 
            }
        case GET_LOGIN_FAILURE:
            return {...state, 
                isFetching : false, 
                error :　action.error 
            }
        default:
            return state
    }
}

export default LoginReducer