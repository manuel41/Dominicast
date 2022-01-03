import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'

const UserContext = React.createContext()
const UserUpdateContext = React.createContext()

export function useUser() {
  return useContext(UserContext)
}
export function useUserUpdate() {
  return useContext(UserUpdateContext)
}

const UserProvider = ({ children }) => {
  const [idUsuarioExistente, setIdUsuarioExistente] = useState(13)
  const [listaTipoActores, setListaTipoActores] = useState([])
  const [listaTipoModelos, setListaTipoModelos] = useState([])
  const [listaHabilidades, setListaHabilidades] = useState([])
  const [ojos, setOjos] = useState([])
  const [coloresPiel, setColoresPiel] = useState([])
  const [cabellos, setCabellos] = useState([])

  const url = "http://localhost:5000"

  useEffect(() => {
    fetchTipoActores();
    fetchTipoModelos();
    fetchHabilidades();
    if (idUsuarioExistente) {
      fetchExistingUser();
    }
    fetchOjos();
    fetchCabellos();
    fetchPieles();
  }, [])

  const fetchExistingUser = async () => {
    const res = await axios.get(`${url}/Persons/${idUsuarioExistente}`);
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
    setColorPiel({ ...existingUser.detallePerfil.colorPiel })
    setColorCabello({ ...existingUser.detallePerfil.colorCabello })
    setColorOjos({ ...existingUser.detallePerfil.colorOjos })
    setCiudad({
      ciudadId: existingUser.user.ciudad.ciudadId,
      nombre: existingUser.user.ciudad.nombre,
    })
    setProvincia({ ...existingUser.user.ciudad.provincia })
  }

  const fetchTipoActores = async () => {
    const res = await axios.get(`${url}/TipoActores`);
    let resArray = res.data;
    resArray = resArray.map((obj) => {
      return {
        ...obj,
        isChecked: false
      }
    })
    setListaTipoActores(resArray)
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

  const fetchOjos = async () => {
    const res = await axios.get(`${url}/ColorOjos`)
    setOjos(res.data)
  }
  const fetchPieles = async () => {
    const res = await axios.get(`${url}/ColorPiel`)
    setColoresPiel(res.data)
  }
  const fetchCabellos = async () => {
    const res = await axios.get(`${url}/ColorCabello`)
    setCabellos(res.data)
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
        colorPiel: { ...colorPiel },
        colorCabello: { ...colorCabello },
        colorOjos: { ...colorOjos },
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
        colorPiel: { ...colorPiel },
        colorCabello: { ...colorCabello },
        colorOjos: { ...colorOjos },
      },
      tipoActors: addTipoActores(),
      tipoModelos: addTipoModelos(),
      habilidad: addHabilidades(),
      tipoUsuario: determineTipoUsuario(),
    }
    const res = await axios.put(`${url}/Persons/${idUsuarioExistente}`, existingUser)
  }

  const addTipoActores = () => {
    return listaTipoActores.filter((type) => type.isChecked)
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

  const [colorOjos, setColorOjos] = useState({
    colorOjosId: undefined,
    color: ""
  })
  const [colorPiel, setColorPiel] = useState({
    colorPielId: undefined,
    color: ""
  })
  const [colorCabello, setColorCabello] = useState({
    colorCabelloId: undefined,
    color: ""
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
  const onChangeColorOjos = (e) => {
    const { name, value } = e.target
    setColorOjos({
      [name]: value,
      color: ojos[value - 1].nombre
    });
  }
  const onChangeColorPiel = (e) => {
    const { name, value } = e.target
    setColorPiel({
      [name]: value,
      color: coloresPiel[value - 1].nombre
    });
  }
  const onChangeColorCabello = (e) => {
    const { name, value } = e.target
    setColorCabello({
      [name]: value,
      color: cabellos[value - 1].nombre
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
      user, ciudad, provincia, colorOjos, colorPiel, colorCabello,
      detallesPerfil, listaTipoActores, listaTipoModelos, listaHabilidades,
      ojos, coloresPiel, cabellos
    }}>
      <UserUpdateContext.Provider value={{
        onChangeUser, onChangeCiudad, onChangeProvincia, onChangeColorOjos, onChangeColorPiel, onChangeColorCabello
        , onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox, onChangeTipoActorCheckbox,
        onChangeTipoModeloCheckbox, onChangeHabilidadesCheckbox, registerNewUser, updateUser
      }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
