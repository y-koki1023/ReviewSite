import axios from 'axios'

export const GET_REVIEW_LIST_REQUEST = 'GET_REVIEW_LIST_REQUEST'
const getReviewListRequest = () => {
    return{
        type: GET_REVIEW_LIST_REQUEST
    }
}

export const GET_REVIEW_LIST_SUCCESS = 'GET_REVIEW_LIST_SUCCESS'
const getReviewListSuccess = (res) => {
    return{
        type: GET_REVIEW_LIST_SUCCESS,
        json: res.data,
        requestStatus: 'SUCCESS'
    }
}

export const GET_REVIEW_LIST_FAILURE = 'GET_REVIEW_LIST_FAILURE'
const getReviewListFailure = (err) => {
    return{
        type: GET_REVIEW_LIST_FAILURE,
        requestStatus: 'ERROR',
        err
    }
} 

export const getReviewList = () => {
    return (dispatch) => {
        dispatch(getReviewListRequest())
        return axios.get(`http://localhost:8000/api/v1/reviews/get/${reviewID}`)
    }
}