import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import HomeCalc from "./homeCalc";
import Toolbar from "@material-ui/core/Toolbar";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '10%',
    },
}));



const Products = () => {

    const classes = useStyles();
    const [cloth, setCloth] = useState(0);
    const [phone, setPhone] = useState(0);
    const [laptop, setLaptop] = useState(0);
    const [footprint, setFootprint] = useState(0);

    function Calculate() {
        setFootprint(parseInt(cloth)*12.9 + (55/parseInt(phone)) + 350/parseInt(laptop));

    }

    return (
        <React.Fragment>


            <Grid container spacing={3} className={classes.root}>

                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="cloth"
                        name="cloth"
                        label="How many pieces of Cloth(e.g. jeans, Shirt) you buy per year?"
                        fullWidth
                        autoComplete="cloth-count"
                        type="number"
                        onChange={e => setCloth(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        required
                        id="smartphone"
                        name="smartphone"
                        label="For how many years do you use one smartphone"
                        fullWidth
                        autoComplete="smartphone-use"
                        type="number"
                        onChange={e => setPhone(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12} sm={10}>
                    <TextField
                        id="address2"
                        name="address2"
                        label="For how many years do you use one Laptop"
                        fullWidth
                        autoComplete="laptop-use"
                        type="number"
                        onChange={e => setLaptop(e.target.value)}
                    />
                    <Typography variant="h6" color="inherit" noWrap>
                        Footprint of Products {footprint.toFixed(2)} Kg.
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
export default Products;