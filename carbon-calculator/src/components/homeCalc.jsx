import React,{useState} git from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
    },
}));


const HomeCalc = () => {
    const classes = useStyles();
    const [people, setPeople] = useState(0);
    const [electricity, setElectricity] = useState(0);
    const [lpg, setLpg] = useState(0);
    const [area, setArea] = useState(0);
    const [footprint, setFootprint] = useState(0);

    function Calculate() {
        setFootprint((parseInt(electricity) * 0.9 * 12) / people + (parseInt(lpg) * 42.5) / people + (parseInt(area) * 0.53) / people
        );

    }

    return (
        <React.Fragment>


            <Grid container spacing={3} className={classes.root}>
                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="people"
                        name="people"
                        label="Number of People in your home"
                        fullWidth
                        autoComplete="people-count"
                        type="number"
                        onChange={e => setPeople(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="lpg"
                        name="lpg"
                        label="Number of LPG Cylinder per year"
                        fullWidth
                        autoComplete="lpg-use"
                        type="number"
                        onChange={e => setLpg(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="electricity"
                        name="electricity"
                        label="Electricity Consumption per month(in kWh/Units)"
                        fullWidth
                        autoComplete="electricity"
                        type="number"
                        onChange={e => setElectricity(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="houseArea"
                        name="houseArea"
                        label="Area of House in Sq Foot"
                        fullWidth
                        autoComplete="houseArea"
                        type="number"
                        onChange={e => setArea(e.target.value)}
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
export default HomeCalc;