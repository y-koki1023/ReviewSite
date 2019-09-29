import React,{useEffect} from 'react'
import {connect} from 'react-redux'

import {getReviewList} from '../actions/review/GetReviewList'

function SearchReview (props) {
    const {params} = props.match
    useEffect( () => {
        props.receiveReviewList(params.categories,params.page,1)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
       <div>
           <p> Hello World</p>
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