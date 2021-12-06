import React, { useEffect, useState } from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useUser, useUserUpdate } from './UserContext';
import axios from 'axios';

export default function DetallesPerfil() {

  const url = "http://localhost:5000"

  useEffect(() => {
    fetchTipoModelos();
    fetchTipoActores();
    fetchHabilidades();
  }, [])

  const [listaTipoActores, setListaTipoActores] = useState([])
  const [listaTipoModelos, setListaTipoModelos] = useState([])
  const [listaHabilidades, setListaHabilidades] = useState([])

  const { tipoActor, tipoModelo, habilidades } = useUser()
  const { onChangeTipoActorCheckbox, onChangeTipoModeloCheckbox, onChangeHabilidadesCheckbox } = useUserUpdate()

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


  return (
    <>
      <Typography variant="h6" gutterBottom>
        Detalles de Perfil
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Detalles de actor</FormLabel>
            <FormGroup>
              {
                listaTipoActores?.map((option) => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={option.isChecked} onChange={onChangeTipoActorCheckbox} key={option.id} name={option.nombre} />
                    }
                    label={option.nombre}
                  />
                ))
              }
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Detalles de modelaje</FormLabel>
            <FormGroup>
              {
                listaTipoModelos?.map((option) => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={option.isChecked} onChange={onChangeTipoModeloCheckbox} key={option.id} name={option.nombre} />
                    }
                    label={option.nombre}
                  />
                ))
              }
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Habilidades</FormLabel>
            <FormGroup>
              {
                listaHabilidades?.map((option) => (
                  <FormControlLabel
                    control={
                      <Checkbox checked={option.isChecked} onChange={onChangeTipoModeloCheckbox} key={option.id} name={option.nombre} />
                    }
                    label={option.nombre}
                  />
                ))
              }
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

    </>
  );
}