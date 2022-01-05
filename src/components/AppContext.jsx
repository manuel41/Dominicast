import { Alert, AlertTitle } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const AppContext = React.createContext()
const AppUpdateContext = React.createContext()

export function useAppContext() {
  return useContext(AppContext)
}
export function useAppContextUpdate() {
  return useContext(AppUpdateContext)
}

const AppContextProvider = ({ children }) => {
  const [currentProfileId, setCurrentProfileId] = useState(0)
  const [currentUserName, setCurrentUserName] = useState('')
  const [currentUserPassword, setCurrentUserPassword] = useState('')

  const url = "http://localhost:5000"

  const onClickLogin = async () => {
    const res = await axios.get(`${url}/Persons`)
    const profiles = res.data
    for (let i = 0; i < profiles.length; i++) {
      if (currentUserName === profiles[i].user.nombreUsuario && currentUserPassword === profiles[i].user.contraseña) {
        setCurrentProfileId(profiles[i].id);
        setCurrentUserName('');
        setCurrentUserPassword('');
        break;
      }
    }
  }

  const onClickLogout = () => {
    setCurrentProfileId(0);
    setCurrentUserName('');
    setCurrentUserPassword('');
  }


  const onChangeUserName = (e) => {
    setCurrentUserName(e.target.value)
  }
  const onChangeUserPassword = (e) => {
    setCurrentUserPassword(e.target.value)
  }




  return (
    <AppContext.Provider value={{ currentProfileId, currentUserName, currentUserPassword }}>
      <AppUpdateContext.Provider value={{ onChangeUserName, onChangeUserPassword, onClickLogin, onClickLogout }}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  )
}

export default AppContextProvider
