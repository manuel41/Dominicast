import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, Container } from '@mui/material';
import { useStyles } from './useStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Discover from './Discover';
import Footer from './components/Footer';
import Home from './Home';


const App = () => {

  const classes = useStyles();

  return (
    <>
      <NavBar />
      <main className={classes.app}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            {/* <div className={classes.container}>
              <Container>
                <Typography variant="subtitle2" color="textPrimary" >UNA PLATAFORMA PARA EL TALENTO</Typography>
                <Typography variant="h4" color="textPrimary" >El cine Dominicano está creciendo</Typography>
                <Typography variant="h5" color="textPrimary" paragraph>Deja que te encuentren</Typography>
              </Container>
            </div> */}
          </Switch>
        </Router>
      </main>
      <Footer />
    </>
  );
}

export default App;