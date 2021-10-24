import { makeStyles } from '@mui/styles'
import React from 'react'
import Footer from './Footer'
import NavBar from './NavBar'

const useStyles = makeStyles((theme) => ({
  page: {
    width: '100%',
    margin: theme.spacing(10, 0, 0)
  },
  root: {
    display: 'flex'
  }
}));

const Layout = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.flex}>
      <NavBar />
      <div className={classes.page}>
        {children}
      </div>
      <Footer />
    </div >
  )
}

export default Layout
