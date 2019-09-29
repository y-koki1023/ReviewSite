import React from 'react'
import Modal from '@material-ui/core/Modal'
import CircularProgress from '@material-ui/core/CircularProgress'

function ProgressModal(props){

    return(
        <Modal
            aria-labelledby="Loading"
            open={props.open}         
        >
            <CircularProgress 
                style = {{
                    position:"absolute",
                    top:"50%",
                    left:"50%",
                    border:"none"
                }}
            />
        </Modal>
    )
}

export default ProgressModal