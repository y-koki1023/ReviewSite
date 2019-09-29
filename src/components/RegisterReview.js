import React from 'react'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'
function RegisterReview (){
    return(
        <div>
            <Link to="/RegisterReview" style = {{textDecoration:"none"}}>
                <Button> Post </Button>
            </Link>
        </div>
    )
}

export default RegisterReview