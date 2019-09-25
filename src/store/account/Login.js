import {GET_POSTS_REQUEST, VERIFY_SUCCESS, VERIFY_FAILURE, GET_POSTS_FAILURE} from '../../actions/account/Login.js'

const initialState = {
    account_id: "",
    username : "",
    isFetching : false
}

const LoginReducer =  (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS_REQUEST :
            return {...state, isFetching : true}
            
        case VERIFY_SUCCESS :
            console.log(action.posts)
            return {...state, 
                isFetching : false, 
                account_id: action.posts.account_id,
                username: action.posts.username
            }
        case VERIFY_FAILURE :
            return {...state, 
                isFetching : false, 
                error : "wrong username or password" 
            }
        case GET_POSTS_FAILURE:
            return {...state, 
                isFetching : false, 
                error :　action.error 
            }
        default:
            return state
    }
}

export default LoginReducer