import {GET_POSTS_REQUEST, VERIFY_SUCCESS, VERIFY_FAILURE, GET_POSTS_FAILURE} from '../actions/account'

const initialState = {
    account_id: "",
    account_name : "",
    isFetching : false
}

const accountReducer =  (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS_REQUEST :
            return {...state, isFetching : true}
            
        case VERIFY_SUCCESS :
            return {...state, 
                isFetching : false, 
                account_id: action.posts.json.account_id,
                account_name: action.posts.json.account_name
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

export default accountReducer