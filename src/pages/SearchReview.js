import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import ReviewButton  from '../components/ReviewButton'
import {getReviewList} from '../actions/review/GetReviewList'


function SearchReview (props) {
    const {params} = props.match
    useEffect( () => {
        props.receiveReviewList(params.categories,params.page,1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const reviewList = props.reviews.map(review => (
        <ReviewButton title = {review.title} reviewID = {review.id}/>
    ))
    return (
        <div>
           <p> Hello World</p>
           {reviewList}
        </div>
    )
}

const mapStateToProps = state => {
    return{
        reviews : state.GetReviewList.reviews
    }
}

const mapDispatchToProps = dispatch => {
    return{
        receiveReviewList : (categories, page, limit) => dispatch(getReviewList(categories,page, limit))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchReview)