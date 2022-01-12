import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import apiRequest from '../api/Requests';
import { useAppContext } from './AppContext';

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useUser() {
  return useContext(UserContext)
}
export function useUserUpdate() {
  return useContext(UserUpdateContext)
}

const UserProvider = ({ children }) => {
  const { currentUserId, ojos, coloresPiel, cabellos, tipoActores, tipoModelos, tipoHabilidades } = useAppContext();

  const [currentProfileId, setCurrentProfileId] = useState(0)
  const [listaTipoActores, setListaTipoActores] = useState([])
  const [listaTipoModelos, setListaTipoModelos] = useState([])
  const [listaHabilidades, setListaHabilidades] = useState([])

  const url = "http://localhost:5000"

  useEffect(() => {
    getTipoActores();
    getTipoModelos();
    getHabilidades();
    if (currentUserId) {
      fetchExistingUser();
    }
    console.log("Use effect ran.");
  }, [])

  const fetchExistingUser = async () => {
    const userDetails = await apiRequest(`{\r\n	getUserById(id: ${currentUserId}){\r\n    nombreUsuario,\r\n    email,\r\n    telefono,\r\n    ciudadId\r\n    detallePerfilId\r\n  }\r\n}`)
    setCurrentProfileId(userDetails.data.getUserById.detallePerfilId);
    const profileDetails = await apiRequest(`{\r\n	getDetailsById(id: ${userDetails.data.getUserById.detallePerfilId}){\r\n    nombre,\r\n    apellido,\r\n    foto,\r\n    edad,\r\n    peso,\r\n    piercings,\r\n    altura,\r\n    colorPielId,\r\n    colorOjosId,\r\n    colorCabelloId,\r\n    tatuajes,\r\n    bigote,\r\n    barba,\r\n    bracers,\r\n    lentes,\r\n    disposicion,\r\n    tipoUsuario,\r\n    tipoactores{\r\n      tipoActorId\r\n    }\r\n    tipomodelos{\r\n      tipoModeloId\r\n    }\r\n    habilidades{\r\n      habilidadId\r\n    }\r\n  }\r\n}`)
    setUser({
      nombreUsuario: userDetails.data.getUserById.nombreUsuario,
      contraseña: "",
      email: userDetails.data.getUserById.email,
      telefono: userDetails.data.getUserById.telefono
    })
    setDetallesPerfil({
      nombre: profileDetails.data.getDetailsById.nombre,
      apellido: profileDetails.data.getDetailsById.apellido,
      genero: "Hombre",
      url: profileDetails.data.getDetailsById.foto,
      edad: profileDetails.data.getDetailsById.edad,
      peso: profileDetails.data.getDetailsById.peso,
      altura: profileDetails.data.getDetailsById.altura,
      tatuajes: profileDetails.data.getDetailsById.tatuajes,
      piercings: profileDetails.data.getDetailsById.piercings,
      bigote: profileDetails.data.getDetailsById.bigote,
      barba: profileDetails.data.getDetailsById.barba,
      bracers: profileDetails.data.getDetailsById.bracers,
      lentes: profileDetails.data.getDetailsById.lentes,
      disposicion: profileDetails.data.getDetailsById.disposicion
    })
    setColorPielId(profileDetails.data.getDetailsById.colorPielId)
    setColorCabelloId(profileDetails.data.getDetailsById.colorCabelloId)
    setColorOjosId(profileDetails.data.getDetailsById.colorOjosId)
    setCiudad({
      ciudadId: userDetails.data.getUserById.ciudadId
    })
  }

  const getTipoActores = async () => {
    const arr = Object.keys(tipoActores).reduce((array, key) => {
      return [...array, { id: key, nombre: tipoActores[key] }]
    }, [])
    setListaTipoActores(arr.map((obj) => {
      return {
        ...obj,
        isChecked: false
      }
    }));
  }
  const getTipoModelos = async () => {
    const arr = Object.keys(tipoModelos).reduce((array, key) => {
      return [...array, { id: key, nombre: tipoModelos[key] }]
    }, [])
    setListaTipoModelos(arr.map((obj) => {
      return {
        ...obj,
        isChecked: false
      }
    }));
  }
  const getHabilidades = async () => {
    const arr = Object.keys(tipoHabilidades).reduce((array, key) => {
      return [...array, { id: key, nombre: tipoHabilidades[key] }]
    }, [])
    setListaHabilidades(arr.map((obj) => {
      return {
        ...obj,
        isChecked: false
      }
    }));
  }

  const registerNewUser = async () => {
    const newProfile = await apiRequest(`mutation {\r\n  createDetails( \r\n    tipoUsuario: ${determineTipoUsuario()}, \r\n    colorPielId: ${colorPielId}, \r\n    colorCabelloId: ${colorCabelloId}, \r\n    colorOjosId: ${colorOjosId}, \r\n    tipoCabelloId: 1,\r\n    nombre: \"${detallesPerfil.nombre}\",\r\n    apellido: \"${detallesPerfil.apellido}\"\r\n    foto: \"${detallesPerfil.url}\",\r\n    edad: ${detallesPerfil.edad},\r\n    altura: ${detallesPerfil.altura},\r\n    peso: ${detallesPerfil.peso}\r\n    tatuajes: ${detallesPerfil.tatuajes},\r\n    bigote: ${detallesPerfil.bigote},\r\n    piercings: ${detallesPerfil.piercings},\r\n    barba: ${detallesPerfil.barba},\r\n    bracers: ${detallesPerfil.bracers},\r\n    lentes: ${detallesPerfil.lentes},\r\n    genero: ${Number(detallesPerfil.genero)},\r\n    disposicion: ${detallesPerfil.disposicion},\r\n    tipoactores: [${addTipoActores()}],\r\n    tipomodelos: [${addTipoModelos()}],\r\n    habilidades: [${addHabilidades()}]\r\n  ){,\r\n    id\r\n    nombre,\r\n    apellido,\r\n    foto,\r\n    edad,\r\n    peso,\r\n    altura,\r\n    genero,\r\n    colorPielId,\r\n    colorOjosId,\r\n    colorCabelloId,\r\n    tatuajes,\r\n    bigote,\r\n    barba,\r\n    bracers,\r\n    piercings,\r\n    lentes,\r\n    disposicion,\r\n    tipoUsuario,\r\n    tipoactores{\r\n        id,\r\n        detallesPerfilId,\r\n        tipoActorId\r\n    }\r\n    tipomodelos{\r\n        id,\r\n        detallesPerfilId,\r\n        tipoModeloId\r\n    }\r\n    habilidades{\r\n        id,\r\n        detallesPerfilId,\r\n        habilidadId\r\n    }\r\n  }\r\n}\r\n`)
    const newUser = await apiRequest(`mutation{\r\n  createUser(\r\n    nombreUsuario: \"${user.nombreUsuario}\",\r\n    password: \"${user.contraseña}\"\r\n    email: \"${user.email}\",\r\n    telefono: \"${user.telefono}\",\r\n    ciudadId: ${ciudad.ciudadId}\r\n    detallePerfilId: ${newProfile.data.createDetails.id}\r\n  ){\r\n    id,\r\n    nombreUsuario,\r\n    password,\r\n    email,\r\n    telefono,\r\n    ciudadId\r\n    detallePerfilId,\r\n  }\r\n}`)
  }
  const updateUser = async () => {
    const existingUser = {
      user: {
        ...user,
        ciudad: {
          ...ciudad,
          provincia: { ...provincia }
        }
      },
      detallePerfil: {
        ...detallesPerfil,
        colorPielId: colorPielId,
        colorCabelloId: colorCabelloId,
        colorOjosId: colorOjosId,
      },
      tipoActors: addTipoActores(),
      tipoModelos: addTipoModelos(),
      habilidad: addHabilidades(),
      tipoUsuario: determineTipoUsuario(),
    }
    const res = await axios.put(`${url}/Persons/${currentProfileId}`, existingUser)
  }

  const addTipoActores = () => {
    const checkedList = listaTipoActores.filter((type) => type.isChecked)
    const arr = checkedList.map((obj) => {
      return `{tipoActorId:"${obj.id}"}`
    })
    return arr
  }
  const addTipoModelos = () => {
    const checkedList = listaTipoModelos.filter((type) => type.isChecked)
    return checkedList.map((obj) => {
      return `{tipoModeloId:"${obj.id}"}`
    })
  }
  const addHabilidades = () => {
    const checkedList = listaHabilidades.filter((type) => type.isChecked)
    return checkedList.map((obj) => {
      return `{habilidadId:"${obj.id}"}`
    })
  }

  const determineTipoUsuario = () => {
    const lista1 = listaTipoActores.filter((type) => type.isChecked)
    const lista2 = listaTipoModelos.filter((type) => type.isChecked)
    if (lista1.length > 0 && lista2.length > 0) return 3
    else if (lista1.length > 0) return 1
    else if (lista2.length > 0) return 2
    else return 0
  }




  const [user, setUser] = useState({
    nombreUsuario: "",
    contraseña: "",
    email: "",
    telefono: ""
  })

  const [ciudad, setCiudad] = useState({
    ciudadId: undefined,
    nombre: ""
  })

  const [provincia, setProvincia] = useState({
    provinciaId: undefined,
    nombre: ""
  })

  const [detallesPerfil, setDetallesPerfil] = useState({
    nombre: "",
    apellido: "",
    genero: undefined,
    url: "",
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

  const [colorOjosId, setColorOjosId] = useState(0)
  const [colorPielId, setColorPielId] = useState(0)
  const [colorCabelloId, setColorCabelloId] = useState(0)

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
  const onChangeColorOjosId = (e) => {
    const { value } = e.target
    setColorOjosId(value);
  }
  const onChangeColorPielId = (e) => {
    const { value } = e.target
    setColorPielId(value);
  }
  const onChangeColorCabelloId = (e) => {
    const { value } = e.target
    setColorCabelloId(value);
  }
  const onChangeDetallesPerfilCheckbox = (e) => {
    const { name, checked } = e.target
    setDetallesPerfil({
      ...detallesPerfil,
      [name]: checked
    });
  }
  const onChangeTipoActorCheckbox = (e) => {
    const { id, checked } = e.target
    let lista = [...listaTipoActores];
    lista[Number(id) - 1].isChecked = checked;
    setListaTipoActores(lista);
  }
  const onChangeTipoModeloCheckbox = (e) => {
    const { id, checked } = e.target
    let lista = [...listaTipoModelos];
    lista[Number(id) - 1].isChecked = checked;
    setListaTipoModelos(lista);
  }
  const onChangeHabilidadesCheckbox = (e) => {
    const { id, checked } = e.target
    let lista = [...listaHabilidades];
    lista[Number(id) - 1].isChecked = checked;
    setListaHabilidades(lista);
  }

  return (
    <UserContext.Provider value={{
      user, ciudad, provincia, colorOjosId, colorPielId, colorCabelloId,
      detallesPerfil, listaTipoActores, listaTipoModelos, listaHabilidades,
      ojos, coloresPiel, cabellos
    }}>
      <UserUpdateContext.Provider value={{
        onChangeUser, onChangeCiudad, onChangeProvincia, onChangeColorOjosId, onChangeColorPielId, onChangeColorCabelloId
        , onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox, onChangeTipoActorCheckbox,
        onChangeTipoModeloCheckbox, onChangeHabilidadesCheckbox, registerNewUser, updateUser
      }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
