import React from 'react'
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
function ReviewButton (props) {
    return(
        <div>
            <Link to = {`/Review/${props.reviewID}`}>
                <Typography variant = {props.variant}> {props.title} </Typography>
            </Link>
            <Divider/>
        </div>
    )
} 

export default ReviewButton