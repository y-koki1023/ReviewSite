import React from 'react'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography'

import '../css/Footer.css'
function Footer(){
    return(
        <div className = "FooterWrapper">
            <Grid container spacing={2} style={{display:"flex"}}>
                <Grid item xs={2}>
                    <a href="policy"> 
                        <Typography 
                            variant = "body1"
                            style = {{color:"white"}}

                        > 
                            Policy 
                        </Typography>
                    </a>
                </Grid>
                <Grid item xs={2}>
                    <a href="app"> 
                        <Typography 
                            variant = "body1"
                            style = {{color:"white"}}

                        > 
                            About this app
                        </Typography>
                    </a>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer