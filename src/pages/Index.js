import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import Divider  from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReviewLists from '../components/ReviewLists'
import {getReviewList} from '../actions/review/GetReviewList'

import "../css/Index.css"


function Index(props) {
    useEffect( () => {
        props.receiveReviewList(" ",1,10)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div className = "IndexWrapper">
            <Header/>
            <div style={{position:"relative",marginTop:"2%",marginBottom:"5%"}}>
                <div className = "IndexBlurBg">
                    <div className = "IndexMainTextField">
                        <Typography variant = "h2"> Welcome to Review Site! </Typography>
                    </div>
                </div>
            </div>
            <Divider/>
            <div className="IndexContentBox">
                <Paper className = "IndexContent">
                    <Typography variant="body1">
                        WIP
                    </Typography>
                </Paper>
                <Divider orientation="vertical"/>
                <Paper className = "IndexContent">
                    <Typography variant="body1">
                        Latest Reviews
                    </Typography>
                    <ReviewLists reviews={props.reviews} variant="body1"/>
                </Paper>
                <Divider orientation="vertical"/>
                <Paper className = "IndexContent">
                    <Typography variant="body1">
                        WIP
                    </Typography>
                </Paper>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        reviews : state.GetReviewList.reviews
    }
}

const mapDispatchToProps = dispatch => {
    return{
        receiveReviewList : (categories, page, limit) => dispatch(getReviewList(categories, page, limit))
    }
}

export default  connect(mapStateToProps,mapDispatchToProps)(Index)