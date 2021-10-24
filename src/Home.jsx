import { Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  home: {

  }
}));

const Home = () => {
  const clasess = useStyles();

  return (
    <div className={clasess.home}>
      <Typography variant="h1">Home</Typography>
    </div>
  )
}

export default Home
