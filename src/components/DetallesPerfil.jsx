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
    console.log(listaTipoModelos);
    fetchTipoActores();
    console.log(listaTipoActores);
    fetchHabilidades();
    console.log(listaHabilidades);
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
    // console.log(listaHabilidades);
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
              <FormControlLabel
                control={
                  <Checkbox checked={tipoActor.cine} onChange={onChangeTipoActorCheckbox} name="cine" />
                }
                label="Cine"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoActor.teatro} onChange={onChangeTipoActorCheckbox} name="teatro" />
                }
                label="Teatro"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoActor.comercial} onChange={onChangeTipoActorCheckbox} name="comercial" />
                }
                label="Comercial"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoActor.voz} onChange={onChangeTipoActorCheckbox} name="voz" />
                }
                label="Actor de Voz"
              />
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Detalles de modelaje</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={tipoModelo.general} onChange={onChangeTipoModeloCheckbox} name="general" />
                }
                label="General"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoModelo.manos} onChange={onChangeTipoModeloCheckbox} name="manos" />
                }
                label="Manos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoModelo.piernas} onChange={onChangeTipoModeloCheckbox} name="piernas" />
                }
                label="Piernas/Pies"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoModelo.dientes} onChange={onChangeTipoModeloCheckbox} name="dientes" />
                }
                label="Dientes"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={tipoModelo.codos} onChange={onChangeTipoModeloCheckbox} name="codos" />
                }
                label="Codos"
              />
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Habilidades</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={habilidades.canto} onChange={onChangeHabilidadesCheckbox} name="canto" />
                }
                label="Canto"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={habilidades.baile} onChange={onChangeHabilidadesCheckbox} name="baile" />
                }
                label="Baile"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={habilidades.cartas} onChange={onChangeHabilidadesCheckbox} name="cartas" />
                }
                label="Maestro de cartas"
              />
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

    </>
  );
}