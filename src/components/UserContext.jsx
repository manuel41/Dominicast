import React, { useContext, useState } from 'react'

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useUser() {
  return useContext(UserContext)
}
export function useUserUpdate() {
  return useContext(UserUpdateContext)
}

const UserProvider = ({ children }) => {

  const [newUser, setNewUser] = useState({
    tipoUsuario: 1,
    tipoModelos: [],
    tipoActors: [],
    habilidad: []
  })

  const [user, setUser] = useState({
    nombreUsuario: "",
    contraseña: "",
    email: "",
    telefono: ""
  })

  const [ciudad, setCiudad] = useState({
    ciudadId: undefined
  })

  const [provincia, setProvincia] = useState({
    provinciaId: undefined
  })

  const [detallesPerfil, setDetallesPerfil] = useState({
    nombre: "",
    apellido: "",
    genero: "",
    foto: "",
    colorOjosId: undefined,
    colorCabelloId: undefined,
    colorPielId: undefined,
    edad: undefined,
    peso: undefined,
    altura: undefined,
    tatuajes: false,
    piercings: false,
    bigote: false,
    barba: false,
    bracers: false,
    lentes: false,
    disposicion: false,
  })

  const [tipoModelo, setTipoModelo] = useState([])

  const [tipoActor, setTipoActor] = useState([])

  const [habilidades, setHabilidades] = useState([])

  const onChangeUser = (e) => {
    const { id, value } = e.target
    setUser({
      ...user,
      [id]: value
    });
  }
  const onChangeCiudad = (e) => {
    const { name, value } = e.target
    setCiudad({
      ...ciudad,
      [name]: value
    });
  }
  const onChangeProvincia = (e) => {
    const { name, value } = e.target
    setProvincia({
      ...provincia,
      [name]: value
    });
  }
  const onChangeDetallesPerfil = (e) => {
    const { name, value } = e.target
    setDetallesPerfil({
      ...detallesPerfil,
      [name]: value
    });
  }
  const onChangeDetallesPerfilCheckbox = (e) => {
    const { name, checked } = e.target
    setDetallesPerfil({
      ...detallesPerfil,
      [name]: checked
    });
  }
  const onChangeTipoActorCheckbox = (e) => {
    const { name, checked } = e.target
    setTipoActor({
      ...tipoActor,
      [name]: checked
    });
  }
  const onChangeTipoModeloCheckbox = (e) => {
    const { name, checked } = e.target
    setTipoModelo({
      ...tipoModelo,
      [name]: checked
    });
  }
  const onChangeHabilidadesCheckbox = (e) => {
    const { name, checked } = e.target
    setHabilidades({
      ...habilidades,
      [name]: checked
    });
  }

  return (
    <UserContext.Provider value={{ user, ciudad, provincia, detallesPerfil }}>
      <UserUpdateContext.Provider value={{ onChangeUser, onChangeCiudad, onChangeProvincia, onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
