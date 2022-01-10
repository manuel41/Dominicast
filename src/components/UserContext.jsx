import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
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
  const { currentProfileId, ojos, coloresPiel, cabellos, tipoActores } = useAppContext();

  const [listaTipoActores, setListaTipoActores] = useState([])
  const [listaTipoModelos, setListaTipoModelos] = useState([])
  const [listaHabilidades, setListaHabilidades] = useState([])

  const url = "http://localhost:5000"

  useEffect(() => {
    getTipoActores();
    fetchTipoModelos();
    fetchHabilidades();
    if (currentProfileId) {
      fetchExistingUser();
    }
  }, [])

  const fetchExistingUser = async () => {
    const res = await axios.get(`${url}/Persons/${currentProfileId}`);
    const existingUser = res.data;
    console.log(existingUser);
    setUser({
      nombreUsuario: existingUser.user.nombreUsuario,
      contraseña: existingUser.user.contraseña,
      email: existingUser.user.email,
      telefono: existingUser.user.telefono
    })
    setDetallesPerfil({
      nombre: existingUser.detallePerfil.nombre,
      apellido: existingUser.detallePerfil.apellido,
      genero: existingUser.detallePerfil.genero,
      url: existingUser.detallePerfil.url,
      edad: existingUser.detallePerfil.edad,
      peso: existingUser.detallePerfil.peso,
      altura: existingUser.detallePerfil.altura,
      tatuajes: existingUser.detallePerfil.tatuajes,
      piercings: existingUser.detallePerfil.piercings,
      bigote: existingUser.detallePerfil.bigote,
      barba: existingUser.detallePerfil.barba,
      bracers: existingUser.detallePerfil.bracers,
      lentes: existingUser.detallePerfil.lentes,
      disposicion: existingUser.detallePerfil.disposicion
    })
    setColorPielId({ ...existingUser.detallePerfil.colorPiel })
    setColorCabelloId({ ...existingUser.detallePerfil.colorCabello })
    setColorOjosId({ ...existingUser.detallePerfil.colorOjosId })
    setCiudad({
      ciudadId: existingUser.user.ciudad.ciudadId,
      nombre: existingUser.user.ciudad.nombre,
    })
    setProvincia({ ...existingUser.user.ciudad.provincia })
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
  const fetchTipoModelos = async () => {
    const res = await axios.get(`${url}/TipoModelos`);
    let resArray = res.data;
    resArray = resArray.map((obj) => {
      return {
        ...obj,
        isChecked: false
      }
    })
    setListaTipoModelos(resArray)
  }
  const fetchHabilidades = async () => {
    const res = await axios.get(`${url}/Habilidades`);
    let resArray = res.data;
    resArray = resArray.map((obj) => {
      return {
        ...obj,
        isChecked: false
      }
    })
    setListaHabilidades(resArray);
  }

  const registerNewUser = async () => {
    const newUser = {
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
    const res = await axios.post(`${url}/Persons`, newUser)
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
    // Change according to how Post request works
  }
  const addTipoModelos = () => {
    return listaTipoModelos.filter((type) => type.isChecked)
  }
  const addHabilidades = () => {
    return listaHabilidades.filter((type) => type.isChecked)
  }

  const determineTipoUsuario = () => {
    const lista1 = listaTipoActores.filter((type) => type.isChecked)
    const lista2 = listaTipoModelos.filter((type) => type.isChecked)
    console.log(lista1);
    console.log(lista2);
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
    genero: "",
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
