import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, CardMedia, CardActionArea, CssBaseline, Grid, Container, Pagination, TextField } from '@mui/material';
import ToggleButtonsMultiple from './components/ToggleButtonsMultiple';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "space-evenly"
    },

    paginationContainer: {
        padding: theme.spacing(3, 0, 4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cardGrid: {
        padding: '20px 0',
    },
    filter: {
        padding: '20px 20px 20px 20px',
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
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            var graphql = JSON.stringify({
                query: "query {\n getAllProfileDetails { id foto nombre apellido genero habilidades tatuajes barba edad altura}}",
                variables: {}
            })
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: graphql,
                redirect: 'follow'
            };

            const res = await fetch("https://dominicast-backend.herokuapp.com/graphql", requestOptions)
                .then(res => res.json())
            setPersons(res.data.getAllProfileDetails);
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
            <Grid container maxWidth='xl' spacing={3} className={classes.container} >

                <Grid item xs={4} maxWidth='xs' className={classes.cardGrid}>
                    <ToggleButtonsMultiple filter={filter} setFilter={setFilter} />
                </Grid>

                <Grid container item xs={7} maxWidth='xs' >
                    <TextField fullWidth id="outlined-search" margin="normal" label="Buscar por nombres, apodos o habilidades" type="search" color='secondary' onChange={(event) => {
                        setSearhTerm(event.target.value);
                    }} />
                    <Grid item xs={12} maxWidth='lg'>
                        <Grid container spacing={3}>
                            {currentPersons
                                .filter((person => {
                                    let isHabilityFound = false;
                                    if (person.habilidades) {
                                        isHabilityFound = person.habilidades.find((habilidad) => {
                                            if (habilidad.descripcion === searchTerm.toLowerCase())
                                                return true;
                                            return false;
                                        });
                                    }
                                    if (searchTerm === "")
                                        return person;
                                    else if (person.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return person;
                                    else if (person.apellido.toLowerCase().includes(searchTerm.toLowerCase()))
                                        return person;
                                    else if (isHabilityFound)
                                        return person;
                                    else return null
                                }))
                                .filter((person) => {
                                    if ((person.tatuajes && filter.includes('sinTatuajes')) ||
                                        (!person.tatuajes && filter.includes('conTatuajes')) ||
                                        (person.barba && filter.includes('sinBarba')) ||
                                        (!person.barba && filter.includes('conBarba')) ||
                                        (person.genero === 1 && filter.includes('male')) ||
                                        (person.genero === 0 && filter.includes('female')) ||
                                        (person.genero === 2 && filter.includes('other')) ||
                                        (!(person.edad < 18) && filter.includes('menor')) ||
                                        (!(person.edad >= 18 && person.edad <= 25) && filter.includes('edad18a25')) ||
                                        (!(person.edad >= 26 && person.edad <= 45) && filter.includes('edad26a45')) ||
                                        (!(person.edad >= 46 && person.edad <= 60) && filter.includes('edad46a60')) ||
                                        (!(person.edad >= 60) && filter.includes('edad60+')) ||
                                        (!(person.altura < 150) && filter.includes('150cm')) ||
                                        (!(person.altura >= 151 && person.altura <= 170) && filter.includes('151a170cm')) ||
                                        (!(person.altura >= 171 && person.altura <= 190) && filter.includes('171a190cm')) ||
                                        (!(person.altura >= 210 && person.altura <= 230) && filter.includes('210a230cm')) ||
                                        (!(person.altura >= 231) && filter.includes('231cm+')))
                                        return false;
                                    else
                                        return true;
                                })
                                .map((person) => (
                                    <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
                                        <Card className={classes.card}>
                                            <CardActionArea href={`/profile/${person.id}`}>
                                                <CardMedia className={classes.cardMedia} image={person.foto} title="image title" />
                                                <CardContent className={classes.cardMedia}>
                                                    <Typography align="center" variant="h5">{`${person.nombre} ${person.apellido}`}</Typography>
                                                </CardContent>
                                            </CardActionArea>
                                        </Card>
                                    </Grid>
                                ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12} className={classes.paginationContainer}>
                        <Pagination count={totalPages} onChange={paginate} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Discover
