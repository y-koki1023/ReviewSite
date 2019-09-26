/*
    やりたいこと: 
        APIからアカウント情報(username, password)が正しいか確認する
        APIから受け取ったアカウントIDをstateに保存する
    GET:
        http://localhost:3000/api/v1/account?username=${username}&password=${password}
        - result: {
            verify: success or failure
            account_id : account_id,
        }
    
*/
import axios from 'axios'

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST'
const getLoginRequest = () =>{
    return {
        type: GET_LOGIN_REQUEST
    }
}

export const VERIFY_LOGIN_SUCCESS = 'VERIFY_LOGIN_SUCCESS'
const verifyLoginSuccess = (json) => {  
  return {
    type: VERIFY_LOGIN_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}
export const VERIFY_LOGIN_FAILURE = 'VERIFY_LOGIN_FAILURE'
const verifyLoginFailure = () => {  
    return {
      type: VERIFY_LOGIN_FAILURE
    }
  }

export const GET_LOGIN_FAILURE = 'GET_LOGIN_FAILURE'
const getLoginFailure = (error) => {
    return{
        type: GET_LOGIN_FAILURE,
        error
    }
}

export const verifyUserInfo = (username, password) => {
  const params = new URLSearchParams();
  params.append('username',username)
  params.append('password',password)
  return (dispatch) => {
    dispatch(getLoginRequest())
    return axios.post(`http://localhost:8000/api/v1/accounts/login`,params)
      .then(res =>
        {
          if (res.data.status === 'SUCCESS') {
              dispatch(verifyLoginSuccess(res.data))
          }else{
              dispatch(verifyLoginFailure())
          }
        }
      ).catch(err => 
        dispatch(getLoginFailure(err))
      )
  }
}



