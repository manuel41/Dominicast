import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, Card, CardContent, CardMedia, CssBaseline, Grid, Container, Box, Link } from '@mui/material';
import { useStyles } from './useStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Discover from './Discover';



const App = () => {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <NavBar />
            <main>
                <div className={classes.container}>
                    <Container>
                        <Typography variant="subtitle2" color="textPrimary" gutterBottom uppercase>UNA PLATAFORMA PARA EL TALENTO</Typography>
                        <Typography variant="h4" color="textPrimary" gutterBottom>El cine Dominicano está creciendo</Typography>
                        <Typography variant="h5" color="textPrimary" paragraph>Deja que te encuentren</Typography>
                    </Container>
                </div>
                <Discover />
            </main>
            <footer>
                <Box bgcolor="black" color="white">
                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={2}>
                                <Box>
                                    <Link>Inicio</Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={2}>

                                <Box>
                                    <Link>Contacto</Link>
                                </Box>
                            </Grid>

                            <Grid item xs={12} sm={3}>
                                <Box>
                                    <Link>Políticas de Privacidad</Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Box>
                                    <Link>Condiciones de uso</Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={2}>
                                <Box>2021 ©Dominicast</Box>
                            </Grid>


                        </Grid>
                    </Container>
                </Box>
            </footer>
        </>
    );
}

export default App;