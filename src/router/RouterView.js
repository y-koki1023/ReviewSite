import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Index from "../pages/Index"
import Login from "../pages/Login"

function RouterView () {
    return(
        <Router>
            <Route path="/" exact component={Index} />
            <Route path="/Login/" component={Login} />
        </Router>
    )
}

export default RouterView