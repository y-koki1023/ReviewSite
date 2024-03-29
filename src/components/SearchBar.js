import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
function SearchBar() {
    const [keyword, setKeyword] = useState("")
    const handleKeyword = (e) =>{
        setKeyword(e.target.value)
    }
    const handleLink = () =>{
        if (keyword === ""){
            return "/SearchReview/ /1"
        }else{
            return `/SearchReview/${keyword}/1` 
        }
    }
    return (
        <div style = {{display:"flex", backgroundColor:"white"}} >
            <InputBase
                placeholder="Search..."
                value = {keyword}
                onChange = {handleKeyword}
            />
            <Link to={handleLink()}>
                <IconButton aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Link>
        </div>
    )
}
export default SearchBar