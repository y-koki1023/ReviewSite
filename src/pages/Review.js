import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import ReactMarkdown from 'react-markdown'
import Paper from '@material-ui/core/Paper'
import {getReview} from '../actions/review/GetReview'

function Review(props) {
    const {params} = props.match
    useEffect( () => {
        props.receiveReview(params.reviewID)
    },[params.reviewID, props])
    return (
        <div>
            <Paper>
                <p> {props.data.title} </p>
                <ReactMarkdown source = {props.data.content}/>
                <p> Tags </p>
            </Paper>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        data: state.GetReview.data
    }
}

const mapDispatchToProps = dispatch => {
    return {
        receiveReview: (reviewID) => dispatch(getReview(reviewID))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Review)