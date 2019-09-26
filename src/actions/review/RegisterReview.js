import axios from 'axios'

export const GET_REGISTER_REVIEW_REQUEST = 'GET_REGISTER_REVIEW_REQUEST'
const getRegisterReviewRequest = () => {
    return {
        type: GET_REGISTER_REVIEW_REQUEST 
    }
}

export const GET_REGISTER_REVIEW_SUCCESS = 'GET_REGISTER_REVIEW_SUCCESS'
const getRegisterReviewSuccess = () => {
    return{
        type: GET_REGISTER_REVIEW_SUCCESS,
    }
}

export const GET_REGISTER_REVIEW_FAILURE = 'GET_REGISTER_REVIEW_FAILURE'
const getRegisterReviewFailure = (error) => {
    return{
        type: GET_REGISTER_REVIEW_FAILURE,
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
      dispatch(getRegisterReviewRequest())
      return axios.post(`http://localhost:8000/api/v1/review/register`,params)
        .then( res => 
            dispatch(getRegisterReviewSuccess())
        ).catch(err => 
          dispatch(getRegisterReviewFailure(err))
        )
    }
}