import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
import MovieIcon from '@mui/icons-material/Movie';
import { typography } from '@mui/system';
import { useStyles } from './useStyles';


const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const messages = [
    {
        id: 1,
        primary: 'Brunch this week?',
        secondary: "I'll be in the neighbourhood this week. Let's grab a bite to eat",
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 2,
        primary: 'Birthday Gift',
        secondary: `Do you have a suggestion for a good present for John on his work
        anniversary. I am really confused & would love your thoughts on it.`,
        person: '/static/images/avatar/1.jpg',
    },
    {
        id: 3,
        primary: 'Recipe to try',
        secondary: 'I am try out this new BBQ recipe, I think this might be amazing',
        person: '/static/images/avatar/2.jpg',
    },
    {
        id: 4,
        primary: 'Yes!',
        secondary: 'I have the tickets to the ReactConf for this year.',
        person: '/static/images/avatar/3.jpg',
    },
    {
        id: 5,
        primary: "Doctor's Appointment",
        secondary: 'My appointment for the doctor was rescheduled for next Saturday.',
        person: '/static/images/avatar/4.jpg',
    },
    {
        id: 6,
        primary: 'Discussion',
        secondary: `Menus that are generated by the bottom app bar (such as a bottom
        navigation drawer or overflow menu) open as bottom sheets at a higher elevation
        than the bar.`,
        person: '/static/images/avatar/5.jpg',
    },
    {
        id: 7,
        primary: 'Summer BBQ',
        secondary: `Who wants to have a cookout this weekend? I just got some furniture
        for my backyard and would love to fire up the grill.`,
        person: '/static/images/avatar/1.jpg',
    },
];


const App = () => {

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position="relative">
                <Toolbar>
                    <MovieIcon className={classes.icon} />
                    <typography variant="h3">Dominicast</typography>
                    <MovieIcon className={classes.icon} />
                    <typography variant="h3">Dominicast</typography>
                    <MovieIcon className={classes.icon} />
                    <typography variant="h3">Dominicast</typography>
                    <MovieIcon className={classes.icon} />
                    <typography variant="h3">Dominicast</typography>
                    <MovieIcon className={classes.icon} />
                    <typography variant="h3">Dominicast</typography>
                    <MovieIcon className={classes.icon} />
                    <typography variant="h3">Dominicast</typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container}>
                    <Container>
                        <Typography variant="subtitle2" color="textPrimary" gutterBottom uppercase>UNA PLATAFORMA PARA EL TALENTO</Typography>
                        <Typography variant="h4" color="textPrimary" gutterBottom>El cine Dominicano está creciendo</Typography>
                        <Typography variant="h5" color="textPrimary" paragraph>Deja que te encuentren</Typography>
                    </Container>
                </div>



                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {messages.map((message) => (
                            <Grid item key="card" xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia className={classes.cardMedia} image="https://source.unsplash.com/random" title="image title" />
                                    <CardContent className={classes.cardMedia}>
                                        <Typography gutterButtom variant="h5">{message.primary}</Typography>
                                        <Typography gutterButtom >{message.secondary}</Typography>


                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
            </main>
        </>
    );
}

export default App;