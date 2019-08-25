import React ,{useEffect} from 'react'
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
}))

export const Resume = (props) => {
    useEffect(() => {
        console.log("url matched for resume")
    })
    return (
        <Typography variant="h4">
            I am Resume Creator Module
        </Typography>
    )
}