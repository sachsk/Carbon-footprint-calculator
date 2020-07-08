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


const Travel = () => {

    const classes = useStyles();
    const [bike, setBike] = useState(0);
    const [car, setCar] = useState(0);
    const [auto, setAuto] = useState(0);
    const [train, setTrain] = useState(0);
    const [plane, setPlane] = useState(0);
    const [bus, setBus] = useState(0);
    const [footprint, setFootprint] = useState(0);

    function Calculate() {
        setFootprint(parseInt(bike) * 0.075 * 12 + parseInt(car) * 0.10082 * 12 + parseInt(auto) * 0.01643 * 12 +
            parseInt(train) * 0.018 + parseInt(plane) * 0.255 + parseInt(bus) * 0.021
        );

    }

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
                        onChange={e => setBike(e.target.value)}
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
                        onChange={e => setCar(e.target.value)}
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
                        onChange={e => setBus(e.target.value)}
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
                        onChange={e => setTrain(e.target.value)}
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
                        onChange={e => setAuto(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="plane"
                        name="plane"
                        label="How much Km do you travel by Plane in one year?"
                        fullWidth
                        autoComplete="plane-use"
                        type="number"
                        onChange={e => setPlane(e.target.value)}
                    />

                <Typography variant="h6" color="inherit" noWrap>
                    Footprint of Products {footprint.toFixed(2)}Kg.
                </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Button variant="contained" color="primary" onClick={() => Calculate()}>
                        Calculate
                    </Button>

                </Grid>

            </Grid>

        </React.Fragment>
    );
}
export default Travel;