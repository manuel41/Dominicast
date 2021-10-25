import { Typography, Container } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  home: {

  }
}));

const Home = () => {
  const clasess = useStyles();

  return (
    <div>
      <Container>
        <Typography variant="subtitle2" color="textPrimary" >UNA PLATAFORMA PARA EL TALENTO</Typography>
        <Typography variant="h4" color="textPrimary" >El cine Dominicano está creciendo</Typography>
        <Typography variant="h5" color="textPrimary" paragraph>Deja que te encuentren</Typography>
      </Container>
    </div>
  )
}

export default Home
