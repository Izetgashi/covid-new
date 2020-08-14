import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';  
import styles from './Cards.module.css';
import CountUp from 'react-countup';



const style = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
    confirmed: {
        borderBottom: "10px solid rgba(0, 0, 255 , 0.5)",
        margin: "5px",
        transition:' 0.3s',
        boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.5)",
      },
    recovered: {
        borderBottom: "10px solid rgba(0, 255, 0 , 0.5)",
        margin: "5px",
        boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.5)",
    },
    deaths: {
        borderBottom: "10px solid rgb(153, 51, 0, 0.6 )",
        margin: "5px",
        boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.5)",
    },
    active: {
        borderBottom: "10px solid rgba(255, 0, 0 , 0.5)",
        margin: "5px",
        boxShadow:" 0 4px 8px 0 rgba(0,0,0,0.5)",
    }
}));

    const Cards = ({ data:{confirmed, recovered, deaths, lastUpdate}}) => {
        
const classes = style();

    if(!confirmed){
        return <div>
             <CircularProgress cl />
        </div>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">

                <Grid item  component={Card} className={classes.confirmed}>
                    <CardContent>
                        <Typography color="primary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} style={{backgroundColor:'linear-gradient(yellow, red)'}} end={confirmed.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  className={classes.recovered}>
                    <CardContent>
                        <Typography style={{color:'green'}} gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant='subtitle1'>Number of recoveries from COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  className={classes.deaths}>
                    <CardContent>
                        <Typography style={{color:'brown'}} gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card}  className={classes.active}>
                    <CardContent>
                        <Typography color="error" gutterBottom>Active Cases</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value - recovered.value-deaths.value} duration={1.5} separator="," />
                        </Typography>
                        <Typography color="textSecondary">{new Date (lastUpdate).toDateString()}</Typography>
                        <Typography variant="subtitle1">Number of active cases by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;