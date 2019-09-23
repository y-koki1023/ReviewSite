import {GET_POSTS_REQUEST, GET_POSTS_SUCCESS, GET_POSTS_FAILURE} from '../../actions/review/RegisterReview'

const initialState = {
    isFetching : false,
    requestStatus: ""
}

const RegisterReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS_REQUEST:
            return {...state,
                isFetching: true
            }
        case GET_POSTS_FAILURE:
            return {...state,
                isFetching:false,
                requestStatus: "failure",
                error: action.error
            }
        case GET_POSTS_SUCCESS:
            return { ...state,
                isFetching: false,
                requestStatus: "success"
            }
        default:
            return state
    }
}

export default RegisterReducer