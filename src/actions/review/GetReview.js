import axios from "axios";

export const GET_REVIEW_REQUEST = 'GET_REVIEW_REQUEST'
const getReviewRequest = () => {
    return{
        type : GET_REVIEW_REQUEST
    }
}

export const GET_REVIEW_SUCCESS = 'GET_REVIEW_SUCCESS'
const getReviewSuccess = (res) => {
    return{
        type: GET_REVIEW_SUCCESS,
        data: res
    }
}

export const GET_REVIEW_FAILURE = 'GET_REVIEW_FAILURE'
const getReviewFailure = (err) =>{
    return{
        type: GET_REVIEW_FAILURE,
        err
    }
}

export const getReview = (reviewID) => {
    return (dispatch) => {
        dispatch(getReviewRequest())
        return axios.get(`http://localhost:8000/api/v1/review/get/${reviewID}`)
            .then( res => 
                dispatch(getReviewSuccess(res))
            ).catch(err =>
                dispatch(getReviewFailure(err))
            )
    }
}