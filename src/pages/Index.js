import React from 'react'
import Paper from '@material-ui/core/Paper'
import Header from '../components/Header'
import Footer from '../components/Footer'
import "../css/Index.css"
import Divider  from '@material-ui/core/Divider';
import { Typography } from '@material-ui/core';

function Index() {
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
                        Latest Reviews
                    </Typography>
                </Paper>
                <Divider orientation="vertical"/>
                <Paper className = "IndexContent">
                    <Typography variant="body1">
                        Latest Reviews
                    </Typography>
                </Paper>
                <Divider orientation="vertical"/>
                <Paper className = "IndexContent">
                    <Typography variant="body1">
                        Latest Reviews
                    </Typography>
                </Paper>
            </div>
            <Divider/>
            <Footer/>
        </div>
    )
}

export default Index