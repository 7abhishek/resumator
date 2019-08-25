import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Login} from '../components/login/login'
import { Resume } from '../components/resume/resume';
import { Home } from '../components/home/home';
import {Grid} from '@material-ui/core'


export const AppRouter = (props) => {
    return(    
    <Router>
        <React.Fragment>
            {props.children}
        </React.Fragment>
        <Grid container justify={"center"}>
        <Grid item lg={12}>
        <Route path="/auth/callback" exact component={Login}></Route>
        <Route path="/" exact component={Login}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/home" exact component={Home}></Route>
        <Route path="/home/create" exact component={Resume}></Route>
        </Grid>        
        </Grid>       
    </Router>
    )
}