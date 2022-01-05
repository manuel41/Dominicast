import React from 'react'
import { AppBar, Toolbar, Stack, Button, Container } from '@mui/material'
// import { makeStyles } from '@mui/styles';
import logo from './logo.png';
import { useAppContext, useAppContextUpdate } from './AppContext';
import { Link } from 'react-router-dom';




// const useStyles = makeStyles((theme) => ({
//   icon: {
//     marginRight: '20px',
//   },
// }));

const NavBar = () => {
  // const classes = useStyles();
  const { currentProfileId } = useAppContext();
  const { onClickLogout } = useAppContextUpdate();


  return (
    <>
      <AppBar position='fixed' color='neutral'>
        <Container maxWidth="lg" >
          <Toolbar>
            <Stack direction="row" spacing={{ xs: 1, sm: 2, md: 8 }}>
              <img src={logo} width="200" />
              <Button size='large' color="primary" component={Link} to="/">Inicio</Button>
              <Button size='large' color="primary" component={Link} to={"/Discover"}>Explorar</Button>
              <Button size='large' color="primary" component={Link} to={"/"}>Nosotros</Button>
              <Button size='large' color="primary" component={Link} to={"/create-profile"}>{currentProfileId > 0 ? "Editar Perfil" : "Regístrate"}</Button>
              {(currentProfileId === 0) &&
                <Button size='large' color="primary" component={Link} to={"/login"}>Login</Button>
              }
              {(currentProfileId > 0) &&
                <Button size='large' color="primary" component={Link} to={"/"} onClick={onClickLogout}>Logout</Button>
              }
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default NavBar
