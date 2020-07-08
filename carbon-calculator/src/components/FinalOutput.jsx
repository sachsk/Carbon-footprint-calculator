import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import HomeCalc from "./homeCalc";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
    },
}));


export default function Footprint() {

    const classes = useStyles();
    const [cloth, setCloth] = useState(0);
    const [phone, setPhone] = useState(0);
    const [laptop, setLaptop] = useState(0);
    const [footprint, setFootprint] = useState(0);

    return (
        <React.Fragment>


            <Grid container spacing={3} className={classes.root}>

                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="bike"
                        name="bike"
                        label="How much Km you travel on two Wheeler per month(km)"
                        fullWidth
                        autoComplete="bike"
                        type="number"
                        onChange={e => setCloth(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="car"
                        name="car"
                        label="How much Km do you travel in Car per month? (Km)"
                        fullWidth
                        autoComplete="car-use"
                        type="number"
                        onChange={e => setPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="bus"
                        name="bus"
                        label="How much Km do you travel by Bus in one year?"
                        fullWidth
                        autoComplete="bus-use"
                        type="number"
                        onChange={e => setPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="train"
                        name="train"
                        label="How much Km do you travel by Train in  year?"
                        fullWidth
                        autoComplete="train"
                        type="number"
                        onChange={e => setLaptop(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="auto"
                        name="auto"
                        label="How much Km do you travel in Auto per month?(km)"
                        fullWidth
                        autoComplete="auto-use"
                        type="number"
                        onChange={e => setLaptop(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="auto"
                        name="auto"
                        label="How much Km do you travel by Plane in one year?"
                        fullWidth
                        autoComplete="auto-use"
                        type="number"
                        onChange={e => setLaptop(e.target.value)}
                    />
                </Grid>

            </Grid>

        </React.Fragment>
    );
}