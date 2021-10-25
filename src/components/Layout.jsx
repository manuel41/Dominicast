import { makeStyles } from '@mui/styles'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  page: {
    width: '100%',
    margin: theme.spacing(15, 0, 0),
    minHeight: '100vh'
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#d8d8d8'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <NavBar />
      <div className={classes.page}>
        {children}
      </div>
      <Footer />
    </div >
  )
}

export default Layout
