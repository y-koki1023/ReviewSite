import {GET_REVIEW_REQUEST, GET_REVIEW_SUCCESS, GET_REVIEW_FAILURE} from '../../actions/review/GetReview'

const initialState = {
    isFetching : false,
    requestStatus: "",
    data: {
        title: "",
        content: "",
        tags: []
    }
}

const getReviewReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_REVIEW_REQUEST: {
            return {...state,
                isFetching: true
            }
        }
        case GET_REVIEW_SUCCESS: {
            console.log(action.json)
            return {...state,
                isFetching: false,
                requestStatus: "success",
                data: {
                    title: action.json.data.review.title,
                    content: action.json.data.review.content,
                    tags: action.json.data.tags 
                }
            }
        }
        case GET_REVIEW_FAILURE: {
            return {...state,
                isFetching: false,
                requestStatus: "error",
                data: {
                    title: "",
                    content: "",
                    tags: [] 
                }
            }
        }
        default:
            return state
    }
}

export default getReviewReducer