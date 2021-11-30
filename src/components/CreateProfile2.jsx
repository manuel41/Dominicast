import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUser, useUserUpdate } from './UserContext';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';

const genders = [
  {
    id: 1,
    description: "Hombre"
  },
  {
    id: 2,
    description: "Mujer"
  }
]
const options = [
  {
    id: 1,
    description: "Si"
  },
  {
    id: 2,
    description: "No"
  }
]

export default function CreateProfile2() {

  const { detallesPerfil } = useUser()
  const { onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox } = useUserUpdate()

  const url = "http://localhost:5000"

  const [ojos, setOjos] = useState([])
  const [coloresPiel, setColoresPiel] = useState([])
  const [cabellos, setCabellos] = useState([])

  useEffect(() => {
    fetchOjos();
    fetchCabellos();
    fetchPieles();
  }, [])

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


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Crear perfil
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="nombre"
            name="nombre"
            label="Nombres"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            value={detallesPerfil.nombre}
            onChange={onChangeDetallesPerfil}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="apellido"
            name="apellido"
            label="Apellidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            value={detallesPerfil.apellido}
            onChange={onChangeDetallesPerfil}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="edad"
            name="edad"
            label="Edad"
            fullWidth
            variant="standard"
            value={detallesPerfil.edad || ""}
            onChange={onChangeDetallesPerfil}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="peso"
            name="peso"
            label="Peso"
            fullWidth
            variant="standard"
            value={detallesPerfil.peso || ""}
            onChange={onChangeDetallesPerfil}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="altura"
            name="altura"
            label="Altura"
            fullWidth
            variant="standard"
            value={detallesPerfil.altura || ""}
            onChange={onChangeDetallesPerfil}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Genero</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="genero"
              value={detallesPerfil.genero}
              onChange={onChangeDetallesPerfil}
            >
              <FormControlLabel value="Hombre" control={<Radio />} label="Hombre" />
              <FormControlLabel value="Mujer" control={<Radio />} label="Mujer" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Color de Ojos</FormLabel>
            <RadioGroup
              aria-label="eyes"
              name="colorOjosId"
              value={detallesPerfil.colorOjosId || ""}
              onChange={onChangeDetallesPerfil}
            >
              {ojos?.map((option) => (
                <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.nombre} />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Color de piel</FormLabel>
            <RadioGroup
              aria-label="eyes"
              name="colorPielId"
              value={detallesPerfil.colorPielId || ""}
              onChange={onChangeDetallesPerfil}
            >
              {coloresPiel?.map((option) => (
                <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.nombre} />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Color de cabello</FormLabel>
            <RadioGroup
              aria-label="eyes"
              name="colorCabelloId"
              value={detallesPerfil.colorCabelloId || ""}
              onChange={onChangeDetallesPerfil}
            >
              {cabellos?.map((option) => (
                <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.nombre} />
              ))}
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset" variant="standard">
            <FormLabel component="legend">Elija todos los que apliquen</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.tatuajes} onChange={onChangeDetallesPerfilCheckbox} name="tatuajes" />
                }
                label="Tatuajes"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.piercings} onChange={onChangeDetallesPerfilCheckbox} name="piercings" />
                }
                label="Piercings"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.bigote} onChange={onChangeDetallesPerfilCheckbox} name="bigote" />
                }
                label="Bigote"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.barba} onChange={onChangeDetallesPerfilCheckbox} name="barba" />
                }
                label="Barba"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.bracers} onChange={onChangeDetallesPerfilCheckbox} name="bracers" />
                }
                label="Bracers"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.lentes} onChange={onChangeDetallesPerfilCheckbox} name="lentes" />
                }
                label="Lentes"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={detallesPerfil.disposicion} onChange={onChangeDetallesPerfilCheckbox} name="disposicion" />
                }
                label="Disposicion a cambios radicales de apariencia"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment >
  );
}