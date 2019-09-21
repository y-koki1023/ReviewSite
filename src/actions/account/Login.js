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

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () =>{
    return {
        type: GET_POSTS_REQUEST
    }
}

export const VERIFY_SUCCESS = 'VERIFY_SUCCESS'
const verifySuccess = (json) => {  
  return {
    type: VERIFY_SUCCESS,
    posts: json,
    receivedAt: Date.now()
  }
}
export const VERIFY_FAILURE = 'VERIFY_FAILURE'
const verifyFailure = () => {  
    return {
      type: VERIFY_FAILURE
    }
  }

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
    return{
        type: GET_POSTS_FAILURE,
        error
    }
}

export const verifyUserInfo = (username, password) => {
  const params = new URLSearchParams();
  params.append('username',username)
  params.append('password',password)
  return (dispatch) => {
    dispatch(getPostsRequest())
    return axios.post(`http://localhost:3000/api/v1/account/login`)
      .then(res =>
        {
          if (res.data.result === 'success') {
              dispatch(verifySuccess(res.data))
          }else{
              dispatch(verifyFailure())
          }
        }
      ).catch(err => 
        dispatch(getPostsFailure(err))
      )
  }
}



