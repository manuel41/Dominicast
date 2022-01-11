import * as React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Discover from './Discover';
import AppContextProvider from './components/AppContext';
import UserProvider from './components/UserContext';
import Home from './Home';
import ProfileView from './ProfileView'
import Layout from './components/Layout';
import CreateProfile from './CreateProfile';
import SignIn from './SignIn'
import NavBar from './components/NavBar';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPGfxdJ9rbNI0ODyQrwuMG33Q_jFlzB8w",
  authDomain: "dominicast-intec.firebaseapp.com",
  projectId: "dominicast-intec",
  storageBucket: "dominicast-intec.appspot.com",
  messagingSenderId: "217852767939",
  appId: "1:217852767939:web:d80cccc804e3c74bf73c76",
  measurementId: "G-16KXLQF7DX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const App = () => {
  return (
    <AppContextProvider>
      <CssBaseline />
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/discover" component={Discover} />
            <Route path="/profile/:id" children={<ProfileView />} />
            <Route path="/login" component={SignIn} />
            <UserProvider>
              <Route path="/create-profile" component={CreateProfile} />
            </UserProvider>
          </Switch>
        </Layout>
      </Router>
    </AppContextProvider>
  );
}

export default App;