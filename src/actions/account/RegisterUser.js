import axios from 'axios'

export const GET_REGISTER_USER_REQUEST = 'GET_REGISTER_USER_REQUEST'
const getRegisterUserRequest = () => {
    return {
        type: GET_REGISTER_USER_REQUEST
    }
}

export const GET_REGISTER_USER_SUCCESS = 'GET_REGISTER_USER_SUCCESS'
const getRegisterUserSuccess = () => {
    return{
        type: GET_REGISTER_USER_SUCCESS,
    }
}

export const GET_REGISTER_USER_FAILURE = 'GET_REGISTER_USER_FAILURE'
const getRegisterUserFailure = (error) => {
    return{
        type: GET_REGISTER_USER_FAILURE,
        error
    }
}

export const registerUserInfo = (username, password, account_id) => {
    const params = new URLSearchParams();
    params.append('username',username)
    params.append('password',password)
    params.append('account_id',account_id)

    return (dispatch) => {
      dispatch(getRegisterUserRequest())
      return axios.post(`http://localhost:8000/api/v1/accounts/register`,params)
        .then( res => 
            dispatch(getRegisterUserSuccess())
        ).catch(err => 
          dispatch(getRegisterUserFailure(err))
        )
    }
}
