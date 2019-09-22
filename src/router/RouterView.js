import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../pages/Index"
import Login from "../pages/Login"
import RegisterUser from "../pages/RegisterUser"
import RegisterReview from "../pages/RegisterReview"

function RouterView () {
    return(
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/Login" component={Login} />
            <Route path="/RegisterUser" component={RegisterUser}/>
            <Route path="/RegisterReview" component={RegisterReview}/>
        </Router>
    )
}

export default RouterView