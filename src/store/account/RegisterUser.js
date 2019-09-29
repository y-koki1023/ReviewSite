import {GET_REGISTER_USER_REQUEST, GET_REGISTER_USER_SUCCESS, GET_REGISTER_USER_FAILURE} from '../../actions/account/RegisterUser'

const initialState = {
    isFetching : false,
    requestStatus: ""
}

const RegisterReducer = (state = initialState, action) => {
    switch (action.type){
        case GET_REGISTER_USER_REQUEST: {
            return {...state, isFetching: true}
        }
        case GET_REGISTER_USER_SUCCESS: {
            return {...state, 
                isFetching: false,
                requestStatus: "SUCCESS"
            }
        } 
        case GET_REGISTER_USER_FAILURE: {
            return {...state, 
                isFetching: false,
                requestStatus: "FAILURE",
                error: action.error
            } 
        } 
        default:
            return state
    }
}

export default RegisterReducer