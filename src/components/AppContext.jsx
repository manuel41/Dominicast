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
  const [ojos, setOjos] = useState({})
  const [coloresPiel, setColoresPiel] = useState({})

  useEffect(() => {
    // fetchOjos();
    // fetchPieles();
  }, [])

  const url = "https://dominicast-backend.herokuapp.com/graphql"

  const apiRequest = (params) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var graphql = JSON.stringify({
      query: params,
      variables: {}
    })
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: graphql,
      redirect: 'follow'
    };

    return fetch(`${url}`, requestOptions)
      .then(res => res.json())
  }


  const fetchOjos = async () => {
    const res = await apiRequest("{\r\n  getAllEyeColors{\r\n    id,\r\n    color\r\n  }\r\n}")
    const dic = res.data.getAllEyeColors.reduce((prev, current) => ({ ...prev, [current.id]: current.color }), {})
    setOjos(dic);
  }
  const fetchPieles = async () => {
    const res = await apiRequest("{\r\n  getAllSkinColors{\r\n    id,\r\n    color\r\n  }\r\n}")
    const dic = res.data.getAllSkinColors.reduce((prev, current) => ({ ...prev, [current.id]: current.color }), {})
    setColoresPiel(dic);
  }

  const onClickLogin = async () => {
    const res = await apiRequest(`mutation{\r\n  login(nombreUsuario:\"${currentUserName}\", password:\"${currentUserPassword}\"){\r\n    successful\r\n    message\r\n    data\r\n  }\r\n}`)
    setCurrentProfileId(res.data.login.data);
    setCurrentUserName('');
    setCurrentUserPassword('');
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
    <AppContext.Provider value={{ currentProfileId, currentUserName, currentUserPassword, ojos, coloresPiel }}>
      <AppUpdateContext.Provider value={{ onChangeUserName, onChangeUserPassword, onClickLogin, onClickLogout }}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  )
}

export default AppContextProvider
