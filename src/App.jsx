import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { Typography, Container, CssBaseline } from '@mui/material';
import { useStyles } from './useStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar';
import Discover from './Discover';
import Footer from './components/Footer';
import Home from './Home';
import ProfileView from './ProfileView'
import Layout from './components/Layout';


const App = () => {

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <main>
              <Route exact path="/" component={Home} />
              <Route path="/discover" component={Discover} />
              <Route path="/profile/:id" children={<ProfileView />} />
            </main>
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;