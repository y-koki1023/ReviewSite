import axios from 'axios'

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST'
const getPostsRequest = () => {
    return {
        type: GET_POSTS_REQUEST 
    }
}

export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS'
const getPostsSuccess = () => {
    return{
        type: GET_POSTS_SUCCESS,
    }
}

export const GET_POSTS_FAILURE = 'GET_POSTS_FAILURE'
const getPostsFailure = (error) => {
    return{
        type: GET_POSTS_FAILURE,
        error
    }
}

export const postReview = (title, content, tags, account_id) => {
    const params = new URLSearchParams();
    params.append('title',title)
    params.append('content',content)
    params.append('tags',tags)
    params.append('account_id',account_id)
    console.log(params)
    return (dispatch) => {
      dispatch(getPostsRequest())
      return axios.post(`http://localhost:8000/api/v1/review/register`,params)
        .then( res => 
            dispatch(getPostsSuccess())
        ).catch(err => 
          dispatch(getPostsFailure(err))
        )
    }
}