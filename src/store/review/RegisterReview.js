import {GET_REGISTER_REVIEW_REQUEST, GET_REGISTER_REVIEW_SUCCESS, GET_REGISTER_REVIEW_FAILURE} from '../../actions/review/RegisterReview'

const initialState = {
    isFetching : false,
    requestStatus: ""
}

const RegisterReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_REGISTER_REVIEW_REQUEST:
            return {...state,
                isFetching: true
            }
        case GET_REGISTER_REVIEW_FAILURE:
            return {...state,
                isFetching:false,
                requestStatus: "failure",
                error: action.error
            }
        case GET_REGISTER_REVIEW_SUCCESS:
            return { ...state,
                isFetching: false,
                requestStatus: "success"
            }
        default:
            return state
    }
}

export default RegisterReducer