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
  const usuarioExistente = undefined
  const [listaTipoActores, setListaTipoActores] = useState([])
  const [listaTipoModelos, setListaTipoModelos] = useState([])
  const [listaHabilidades, setListaHabilidades] = useState([])

  const url = "http://localhost:5000"

  useEffect(() => {
    const fetchExistingUser = async () => {
      const res = await axios.get(`${url}/Persons/${usuarioExistente}`);
      setDatosUsuario(res.data)
    }
    if (usuarioExistente) {
      fetchExistingUser();
    }
    fetchTipoModelos();
    fetchTipoActores();
    fetchHabilidades();
  }, [usuarioExistente])

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



  const [datosUsuario, setDatosUsuario] = useState({})
  const [usuario, setUsuario] = useState({})

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
        colorPiel: { colorPielId: detallesPerfil.colorPielId },
        colorCabello: { colorCabelloId: detallesPerfil.colorCabelloId },
        colorOjos: { colorOjosId: detallesPerfil.colorOjosId },
      },
      tipoUsuario: 3,
      tipoActor: addTipoActores(),
      tipoModelo: addTipoModelos(),
      habilidades: addHabilidades()
    }
    const res = await axios.post(`${url}/Persons`, newUser)
  }

  // const determineTipoUsuario = (params) => {

  // }


  const [tipoActor, setTipoActor] = useState([]);
  const [tipoModelo, setTipoModelo] = useState([]);
  const [habilidades, setHabilidades] = useState([]);

  const addTipoActores = () => {
    return listaTipoActores.filter((type) => type.isChecked)
  }
  const addTipoModelos = () => {
    return listaTipoModelos.filter((type) => type.isChecked)
  }
  const addHabilidades = () => {
    return listaHabilidades.filter((type) => type.isChecked)
  }



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
      user, ciudad, provincia,
      detallesPerfil, listaTipoActores, listaTipoModelos, listaHabilidades
    }}>
      <UserUpdateContext.Provider value={{
        onChangeUser, onChangeCiudad, onChangeProvincia
        , onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox, onChangeTipoActorCheckbox,
        onChangeTipoModeloCheckbox, onChangeHabilidadesCheckbox, registerNewUser
      }}>
        {children}
      </UserUpdateContext.Provider>
    </UserContext.Provider>
  )
}

export default UserProvider
