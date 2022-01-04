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
  const [currentUserId, setCurrentUserId] = useState(0)
  const [currentUserName, setCurrentUserName] = useState('')
  const [currentUserPassword, setCurrentUserPassword] = useState('')

  const url = "http://localhost:5000"

  const onClickLogin = async () => {
    const res = await axios.get(`${url}/Persons`)
    const users = res.data.map((obj) => {
      return { ...obj.user }
    })
    for (let i = 0; i < users.length; i++) {
      if (currentUserName === users[i].nombreUsuario && currentUserPassword === users[i].contraseña) {
        console.log("Login successful");
        break;
      }
    }
  }

  const onChangeUserName = (e) => {
    setCurrentUserName(e.target.value)
  }
  const onChangeUserPassword = (e) => {
    setCurrentUserPassword(e.target.value)
  }




  return (
    <AppContext.Provider value={{ currentUserId, currentUserName, currentUserPassword }}>
      <AppUpdateContext.Provider value={{ onChangeUserName, onChangeUserPassword, onClickLogin }}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  )
}

export default AppContextProvider
