import React from 'react'
import ReviewButton from './ReviewButton'

function ReviewLists (props) {
    const reviewList = props.reviews.map((review,index) => (
        <ReviewButton key = {index} title = {review.title} reviewID = {review.id} variant={props.variant}/>
    ))
    return(
        <div>
            {reviewList}
        </div>
    )
}

export default ReviewLists