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
    detallePerfil: {
      detallesPerfilId: 0,
      colorPiel: {
        colorPielId: 0,
        color: ""
      },
      colorCabello: {
        colorCabelloId: 0,
        color: ""
      },
      colorOjos: {
        colorOjosId: 0,
        color: ""
      },
      tipoPiel: {
        tipoPielId: 0,
        descripcion: ""
      },
      nombre: "Robert",
      apellido: "",
      genero: "",
      foto: "",
      edad: 0,
      peso: 0,
      altura: 0,
      tatuajes: false,
      piercings: false,
      bigote: false,
      barba: false,
      bracers: false,
      lentes: false,
      disposicion: false,
      url: "https://bit.ly/ryan-florence"
    },
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
    ciudadId: 0,
    nombre: ""
  })

  const [provincia, setProvincia] = useState({
    provinciaId: 0,
    nombreProvincia: ""
  })

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
    console.log(ciudad)
  }
  const onChangeProvincia = (e) => {
    const { name, value } = e.target
    setProvincia({
      ...provincia,
      [name]: value
    });
  }

  return (
    <UserContext.Provider value={{ user, ciudad, provincia }}>
      <UserUpdateContext.Provider value={{ onChangeUser, onChangeCiudad, onChangeProvincia }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
