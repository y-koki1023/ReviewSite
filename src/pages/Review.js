import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'

import Header from '../components/Header'
import Footer from '../components/Footer'

import "../css/Review.css"
import {getReview} from '../actions/review/GetReview'

function Review(props) {
    const {params} = props.match
    useEffect( () => {
        props.receiveReview(params.reviewID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className = "ReviewWrapper">
            <Header/>
            <Paper className = "ReviewBody">
                <Typography variant = "h4"> {props.data.title} </Typography>

                {mapTags(props.data.tags)}
                <Divider/>
                <ReactMarkdown 
                    source = {props.data.content}
                />
                
            </Paper>
            <Footer/>
        </div>
    )
}

const mapTags = (tags) => {
    return tags.map( (tag,index) => (
        <Button
            className = "ReviewTag"
            key={index}
            
        > 
            {tag.title} 
        </Button>
    ))
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