import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Discover from './Discover';
import UserProvider from './components/UserContext';
import Home from './Home';
import ProfileView from './ProfileView'
import Layout from './components/Layout';
import CreateProfile from './CreateProfile';
import SignIn from './SignIn';

const App = () => {


  return (
    <>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/profile/:id" children={<ProfileView />} />
            <UserProvider>
              <Route path="/create-profile" component={CreateProfile} />
            </UserProvider>
            <Route path="/sign-in" component={SignIn} />
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;