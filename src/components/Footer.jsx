import React from 'react'
import { Typography, Grid, Container, Box, Link } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    footerContainer: {
        padding: theme.spacing(3, 0, 4),
        margin: theme.spacing(5, 0, 0)
    },
}));



const Footer = () => {
    const classes = useStyles();
    return (
        <footer>
            <Box bgcolor="primary">
                <Container maxWidth="lg" className={classes.footerContainer}>
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
                            <Box color='secondary'>2021 ©Dominicast </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer
