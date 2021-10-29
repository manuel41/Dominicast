import React from 'react'
import { AppBar, Toolbar, Stack, Button, Container } from '@mui/material'
import { makeStyles } from '@mui/styles';
import logo from './logo.png';





const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: '20px',
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar position='fixed' color='neutral'>
        <Container maxWidth="md" >
          <Toolbar>
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 8 }}>
              <img src={logo} width="200" />
              <Button size='large' color="primary" href="/Home">Inicio</Button>
              <Button size='large' color="primary" href="/Discover">Explorar</Button>
              <Button size='large' color="primary">Nosotros</Button>
              <Button size='large' color="primary" href="create-profile">Registrarse</Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
