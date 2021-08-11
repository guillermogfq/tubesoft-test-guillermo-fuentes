import React, { useState, useRef } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { createTimeRecords } from "../services/APIServices";

const useStyles = makeStyles({
  card: {
    margin: '10px',
  },
  chron_text: {
    padding: 20, 
  }
});

const Chronometer = () => {
    const classes = useStyles();

    const [timer, setTimer] = useState(0);
    const [startTime, setStartTime] = useState(null);
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const countRef = useRef(null);

    const handleStart = () => {
        setIsActive(true);
        setIsPaused(true);
        setStartTime(new Date());
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handlePause = () => {
        clearInterval(countRef.current);
        setIsPaused(false);
    };

    const handleResume = () => {
        setIsPaused(true);
        countRef.current = setInterval(() => {
            setTimer((timer) => timer + 1);
        }, 1000);
    };

    const handleReset = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setStartTime(null);
        setTimer(0);
    };

    const handleEnd = () => {
        clearInterval(countRef.current);
        setIsActive(false);
        setIsPaused(false);
        setStartTime(null);
        const create = createTimeRecords;
        let endTime = new Date();
        let time = new Date(0,0,0,0,0,0,0);
        time.setSeconds(timer);
        let data = {
          time_start: startTime.toLocaleTimeString(),
          time_end: endTime.toLocaleTimeString(),
          time_run: time.toLocaleTimeString()
        };
        create(data);
        setTimer(0);
    };

    const formatTime = () => {
      const getSeconds = `0${timer % 60}`.slice(-2);
      const minutes = `${Math.floor(timer / 60)}`;
      const getMinutes = `0${minutes % 60}`.slice(-2);
      const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

      return `${getHours} : ${getMinutes} : ${getSeconds}`;
    };

    return (
      <Card className={classes.card}>
        <CardContent>
          <Typography align="center" color="primary" variant="h2" component="h5">
            {formatTime()}
          </Typography>
        </CardContent>
        <CardActions>
          {!isActive && !isPaused ? (
            <Button onClick={handleStart}>Iniciar</Button>
          ) : isPaused ? (
            <Button onClick={handlePause}>Pausar</Button>
          ) : (
            <Button onClick={handleResume}>Continuar</Button>
          )}
          <Button onClick={handleEnd} disabled={!isActive}>
            Finalizar
          </Button>
          <Button onClick={handleReset} disabled={!isActive}>
            Restablecer
          </Button>
        </CardActions>
      </Card>
    );
}

export default Chronometer;
