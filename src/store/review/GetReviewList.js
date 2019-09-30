import {GET_REVIEW_LIST_REQUEST,GET_REVIEW_LIST_SUCCESS, GET_REVIEW_LIST_FAILURE} from '../../actions/review/GetReviewList'

const initialState = {
    requestStatus: "",
    isFetching: "",
    reviews: []
}

const ReviewListReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REVIEW_LIST_REQUEST:{
            return {...state,
                isFetching: true
            }
        }
        case GET_REVIEW_LIST_SUCCESS:{
            return {...state,
                isFetching: false,
                requestStatus: "SUCCESS",
                reviews: action.json.reviews
            }
        }
        case GET_REVIEW_LIST_FAILURE: {
            return {...state,
                isFetching: false,
                requestStatus: "FAILURE",
                error: action.err
            }
        }
        default:
            return state
    }
}

export default ReviewListReducer