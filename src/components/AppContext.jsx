import React, { useContext, useEffect, useState } from 'react'
import apiRequest from '../api/Requests'

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

  const [ojos, setOjos] = useState({})
  const [coloresPiel, setColoresPiel] = useState({})
  const [cabellos, setCabellos] = useState({})

  const [tipoActores, setTipoActores] = useState({})
  const [tipoModelos, setTipoModelos] = useState({})
  const [tipoHabilidades, setTipoHabilidades] = useState({})

  const [ciudades, setCiudades] = useState({})

  useEffect(() => {
    // fetchOjos();
    // fetchPieles();
    // fetchCabellos();
    // fetchTipoActores();
    // fetchTipoModelos();
    // fetchHabilidades();
    // fetchCities();
  }, [])

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
  const fetchCabellos = async () => {
    const res = await apiRequest("{\r\n  getAllHairColors{\r\n    id,\r\n    color\r\n  }\r\n}")
    const dic = res.data.getAllHairColors.reduce((prev, current) => ({ ...prev, [current.id]: current.color }), {})
    setCabellos(dic);
  }
  const fetchTipoActores = async () => {
    const res = await apiRequest("{\r\n  getAllActorTypes{\r\n    id,\r\n    descripcion\r\n  }\r\n}")
    const dic = res.data.getAllActorTypes.reduce((prev, current) => ({ ...prev, [current.id]: current.descripcion }), {})
    setTipoActores(dic);
  }
  const fetchTipoModelos = async () => {
    const res = await apiRequest("{\r\n  getAllModelTypes{\r\n    id,\r\n    descripcion\r\n  }\r\n}")
    const dic = res.data.getAllModelTypes.reduce((prev, current) => ({ ...prev, [current.id]: current.descripcion }), {})
    setTipoModelos(dic);
  }
  const fetchHabilidades = async () => {
    const res = await apiRequest("{\r\n  getAllAbilities{\r\n    id,\r\n    descripcion\r\n  }\r\n}")
    const dic = res.data.getAllAbilities.reduce((prev, current) => ({ ...prev, [current.id]: current.descripcion }), {})
    setTipoHabilidades(dic);
  }
  const fetchCities = async () => {
    const res = await apiRequest("{\r\n  getAllCities{\r\n    id,\r\n    provinciaId,\r\n    nombre\r\n  }\r\n}")
    const dic = res.data.getAllCities.reduce((prev, current) => ({ ...prev, [current.id]: current.nombre }), {})
    setCiudades(dic);
  }

  const onClickLogin = async () => {
    let res = await apiRequest(`mutation{\r\n  login(nombreUsuario:\"${currentUserName}\", password:\"${currentUserPassword}\"){\r\n    successful\r\n    message\r\n    data\r\n  }\r\n}`)
    setCurrentUserId(res.data.login.data);
    setCurrentUserName('');
    setCurrentUserPassword('');
  }

  const onClickLogout = () => {
    setCurrentUserId(0);
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
    <AppContext.Provider value={{
      currentUserId, currentUserName, currentUserPassword,
      ojos, coloresPiel, cabellos, tipoActores, tipoModelos, tipoHabilidades,
      ciudades
    }}>
      <AppUpdateContext.Provider value={{ onChangeUserName, onChangeUserPassword, onClickLogin, onClickLogout }}>
        {children}
      </AppUpdateContext.Provider>
    </AppContext.Provider>
  )
}

export default AppContextProvider
