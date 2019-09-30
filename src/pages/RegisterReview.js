import React, {useState} from 'react'
import {connect} from 'react-redux'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProgressModal from '../components/ProgressModal'
import "../css/RegisterReview.css"

import {postReview} from '../actions/review/RegisterReview'

function RegisterReview(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("")
    const [tags, setTags] = useState([])

    const handleTextField = (e, type) => {
        if(type === 'title'){
            setTitle(e.target.value)
        }
        if(type === 'content'){
            setContent(e.target.value)
        }
        if(type === 'tag'){
            setTag(e.target.value)
        }
    }

    const addNewTag = () => {
        if(tag !== '') {
            const newTags = tags;
            newTags.push(tag)
            setTags(newTags)
            setTag("")
        }
    }

    return(
        <div className = "RegisterReviewWrapper">
            <ProgressModal open = {props.isFetching}/>
            <Header/>
            <div className = "RegisterReviewBody">
                <Typography variant="h5"> Post your new Review </Typography>
                <Paper>
                    <div className = "RegisterReviewInputField">
                        <TextField
                            label="Review Title"
                            value = {title}
                            helperText="Required*"
                            onChange = {(e) => handleTextField(e,'title')}
                            margin="normal"
                        />
                        <TextField
                            className = "RegisterReviewMarkdown"
                            label="Review"
                            multiline
                            rows="20"
                            value={content}
                            onChange={(e) => handleTextField(e, 'content')}
                            margin="normal"
                            helperText="Markdown"
                            variant="outlined"
                        />
                        <TextField
                                label="Tags"
                                value={tags}
                                disabled
                                margin="normal"
                                helperText="Tags"
                                variant="outlined"
                            />
                        <div>
                            <TextField
                                lavel="Tag"
                                value = {tag}
                                onChange = { (e) => handleTextField(e,'tag')}
                            />
                            <Button onClick = {addNewTag}> Add New Tag </Button>
                        </div>
                            <Button 
                                onClick = {() => props.postReview(title,content,tags,props.account_id)}> 
                                POST 
                            </Button>
                    </div>
                </Paper>
            </div>
            <Footer/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        account_id : state.Login.account_id,
        isFetching : state.RegisterReview.isFetching
    }
}

const mapDispatchToProps = dispatch => {
    return{
        postReview : (title,content,tags,account_id) => dispatch(postReview(title,content,tags,account_id)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(RegisterReview)
