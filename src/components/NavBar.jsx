import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: '20px',
    marginLeft: '40px'
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <MovieIcon className={classes.icon} />
          <Typography variant="h6">Dominicast</Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavBar
