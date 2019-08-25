import React, { useEffect } from 'react'
import { Grid, Button, IconButton } from '@material-ui/core'
import LinkedInIcon from '../icons/linkedIn'
import { makeStyles } from '@material-ui/core';
import queryString from 'query-string'
import { isEmpty } from 'lodash'
import {
    CLIENT_ID,
    LINKED_IN_AUTH_URL,
    RESPONSE_TYPE,
    REDIRECT_URI,
    SCOPE,
    ACCESS_TOKEN_URL,
    CLIENT_SECRET,
} from '../../constants';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(2)
    }
}))

export const Login = (props) => {
    const classes = useStyles()
    const { location, match } = props

    useEffect(() => {
        console.log("hello, login", location)
        console.log(" match ", match)
        const { code } = queryString.parse(location.search)
        console.log("code ", code)
        if (isEmpty(code)) {
            return
        }
        getAccessToken(code)
    }, [location])


    const getAccessToken = (code) => {
        const data = {
            grant_type: "authorization_code",
            code,
            redirect_uri: REDIRECT_URI,
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
        }
        // Move the getting accesstoken http call to backend.
        fetch(ACCESS_TOKEN_URL, {
            method: "POST",
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json',
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        }).then(response => {
            console.log(response.json());
        })
    }
    const authLinkedIn = () => {
        console.log("authLinkedIn...")
        const redirectURL = `${LINKED_IN_AUTH_URL}?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
        console.log(`redirectURL ${redirectURL}`)
        window.location.href = redirectURL
    }

    return (
        <Grid container className={classes.root}>
            <Grid item lg={4}>
            </Grid>
            <Grid item lg={4}>
                <IconButton color="primary" size="medium" onClick={authLinkedIn}>
                    <LinkedInIcon /> &nbsp;Login
               </IconButton>
            </Grid>
            <Grid item lg={4}>
            </Grid>
        </Grid>
    )
}
