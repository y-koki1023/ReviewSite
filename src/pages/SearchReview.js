import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReviewButton  from '../components/ReviewButton'
import "../css/SearchReview.css"
import {getReviewList} from '../actions/review/GetReviewList'


function SearchReview (props) {
    const {params} = props.match
    useEffect( () => {
        props.receiveReviewList(params.categories,params.page,10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params])
    const reviewList = props.reviews.map((review,index) => (
        <ReviewButton key = {index} title = {review.title} reviewID = {review.id} variant="h4" />
    ))
    return (
        <div className = 'SearchReviewWrapper'>
            <Header/>
            <Paper className = "SearchReviewBody">
                <Typography variant="h4"> {`Search review with ${params.categories} `} </Typography>
                {reviewList}
            </Paper>
            <Footer/>
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
        receiveReviewList : (categories, page, limit) => dispatch(getReviewList(categories, page, limit))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchReview)