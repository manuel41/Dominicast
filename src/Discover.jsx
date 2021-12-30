import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Typography, Card, CardContent, CardMedia, CardActionArea, CssBaseline, Grid, Container, Pagination, TextField } from '@mui/material';
import ToggleButtonsMultiple from './components/ToggleButtonsMultiple';
//import { RouterLink } from 'react-router-dom';

import { makeStyles } from '@mui/styles';
import { ReduceCapacityRounded } from '@mui/icons-material';

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
    const [personsPerPage, setPersonsPerPage] = useState(12);
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

                <TextField fullWidth id="outlined-search" margin="normal" label="Buscar por nombres, apodos o habilidades" type="search" color='secondary' onChange={(event) => {
                    setSearhTerm(event.target.value);
                }} />
                <ToggleButtonsMultiple filter={filter} setFilter={setFilter} />
                <Container disableGutters="true" className={classes.paginationContainer}>
                    <Grid container spacing={3}>
                        {currentPersons
                            .filter((person => {
                                let isHabilityFound = false;
                                isHabilityFound = person.habilidad.find((habilidad) => {
                                    if (habilidad.nombre === searchTerm.toLowerCase())
                                        return true;
                                })
                                if (searchTerm === "")
                                    return person;
                                else if (person.user.nombreUsuario.toLowerCase().includes(searchTerm.toLowerCase()))
                                    return person;
                                else if (person.detallePerfil.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
                                    return person;
                                else if (person.detallePerfil.apellido.toLowerCase().includes(searchTerm.toLowerCase()))
                                    return person;
                                else if (isHabilityFound)
                                    return person;
                            }))
                            .filter((person) => {
                                if ((person.detallePerfil.tatuajes && filter.includes('sinTatuajes')) ||
                                    (!person.detallePerfil.tatuajes && filter.includes('conTatuajes')) ||
                                    (person.detallePerfil.barba && filter.includes('sinBarba')) ||
                                    (!person.detallePerfil.barba && filter.includes('conBarba')) ||
                                    (!(person.detallePerfil.edad < 18) && filter.includes('Menor')) ||
                                    (!(person.detallePerfil.edad >= 18 && person.detallePerfil.edad <= 25) && filter.includes('edad18a25')) ||
                                    (!(person.detallePerfil.edad >= 26 && person.detallePerfil.edad <= 45) && filter.includes('edad26a45')) ||
                                    (!(person.detallePerfil.edad >= 46 && person.detallePerfil.edad <= 60) && filter.includes('edad46a60')) ||
                                    (!(person.detallePerfil.edad >= 60) && filter.includes('edad60+')) ||
                                    (!(person.detallePerfil.altura < 150) && filter.includes('150cm')) ||
                                    (!(person.detallePerfil.altura >= 151 && person.detallePerfil.altura <= 170) && filter.includes('151a170cm')) ||
                                    (!(person.detallePerfil.altura >= 171 && person.detallePerfil.altura <= 190) && filter.includes('171a190cm')) ||
                                    (!(person.detallePerfil.altura >= 210 && person.detallePerfil.altura <= 230) && filter.includes('210a230cm')) ||
                                    (!(person.detallePerfil.altura >= 231) && filter.includes('231cm+')))
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
                                                <Typography align="center" variant="h5">{`${person.detallePerfil.nombre} ${person.detallePerfil.apellido}`}</Typography>
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
