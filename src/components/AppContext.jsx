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


  return (
    <AppContext.Provider value={{}}>
      <AppUpdateContext.Provider value={{}}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  )
}

export default AppContextProvider
