import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia, CardActionArea, CssBaseline, Grid, Container, Pagination, TextField } from '@mui/material';
import ToggleButtonsMultiple from './components/ToggleButtonsMultiple';
//import { RouterLink } from 'react-router-dom';

import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    paginationContainer: {
        padding: theme.spacing(3, 0, 4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    cardGrid: {
        padding: '20px 0',

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '80.25%'
    },
    cardContent: {
        flexGrow: '1'
    },
    filter: {
        position: 'absolute'
    },
}));


const Discover = () => {
    const [persons, setPersons] = useState([]);
    // const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [personsPerPage, setPersonsPerPage] = useState(9);
    const [filter, setFilter] = useState([]);
    const [searchTerm, setSearhTerm] = useState("");


    const totalPages = Math.ceil(persons.length / personsPerPage);

    const paginate = (event, value) => {
        setCurrentPage(value);
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        const fetchPersons = async () => {
            //setLoading(true);
            const res = await axios.get('http://localhost:5000/Persons');
            setPersons(res.data);
            //setLoading(false);
        }
        fetchPersons();
    }, []);


    const indexOfLastPerson = currentPage * personsPerPage;
    const indexOfFirstPerson = indexOfLastPerson - personsPerPage;
    const currentPersons = persons.slice(indexOfFirstPerson, indexOfLastPerson);

    const classes = useStyles();

    return (
        <div>
            <CssBaseline />

            <Container className={classes.filter}>
            </Container>

            <Container className={classes.cardGrid} maxWidth="lg" >

                <TextField fullWidth id="outlined-search" margin="normal" label="Buscar" type="search" color='secondary' onChange={(event) => {
                    setSearhTerm(event.target.value);
                }} />
                <ToggleButtonsMultiple filter={filter} setFilter={setFilter} />
                <Container disableGutters="true" className={classes.paginationContainer}>
                    <Grid container spacing={3}>
                        {currentPersons
                            .filter((person => {
                                if (searchTerm === "")
                                    return person;
                                else if (person.user.nombreUsuario.toLowerCase().includes(searchTerm.toLowerCase()))
                                    return person;
                            }))
                            .filter((person) => {
                                if ((person.detallePerfil.tatuajes && filter.includes('sinTatuajes')) ||
                                    (!person.detallePerfil.tatuajes && filter.includes('conTatuajes')) ||
                                    (person.detallePerfil.barba && filter.includes('sinBarba')) ||
                                    (!person.detallePerfil.barba && filter.includes('conBarba')))
                                    return false;
                                else
                                    return true;
                            })
                            .map((person) => (
                                <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
                                    <Card className={classes.card}>
                                        <CardActionArea href={`/profile/${person.id}`}>
                                            <CardMedia className={classes.cardMedia} image={person.detallePerfil.url} title="image title" />
                                            <CardContent className={classes.cardMedia}>
                                                <Typography variant="h5">{person.user.nombreUsuario}</Typography>
                                                <Typography  >Estatura: {person.detallePerfil.altura}</Typography>
                                                <Typography  >Peso: {person.detallePerfil.peso}</Typography>
                                                <Typography  >Barba: {person.detallePerfil.barba ? "si" : "no"}</Typography>
                                                <Typography  >tatuajes: {person.detallePerfil.tatuajes ? "si" : "no"}</Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                    </Grid>
                </Container>
                <Container className={classes.paginationContainer}>
                    <Pagination count={totalPages} className={classes.paginationContainer} onChange={paginate} />
                </Container>
            </Container>
        </div>
    )
}

export default Discover
