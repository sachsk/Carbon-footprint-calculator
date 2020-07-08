import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Products from "./newProducts";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent:'center',
        alignItems:'center',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(100),
            height: theme.spacing(100),
        },
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper elevation={3} >

                <Products/>

            </Paper>
        </div>
    );
}