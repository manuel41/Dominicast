import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUser, useUserUpdate } from './UserContext';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import axios from 'axios';

const RegisterUser = () => {

  const { user, ciudad, provincia } = useUser()
  const { onChangeUser, onChangeCiudad, onChangeProvincia } = useUserUpdate()

  const url = "http://localhost:5000"
  const [ciudades, setCiudades] = useState([])
  const [provincias, setProvincias] = useState([])

  useEffect(() => {
    fetchCities();
    fetchProvinces();
  }, [])

  const fetchCities = async () => {
    const res = await axios.get(`${url}/Ciudades`)
    setCiudades(res.data)
  }

  const fetchProvinces = async () => {
    const res = await axios.get(`${url}/Provincias`)
    setProvincias(res.data)
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Detalles Usuario
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="nombreUsuario"
            name="nombreUsuario"
            label="Usuario"
            fullWidth
            autoComplete="username"
            variant="standard"
            value={user.nombreUsuario}
            onChange={onChangeUser}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contraseña"
            name="contraseña"
            label="Contraseña"
            fullWidth
            autoComplete="current-password"
            type="password"
            variant="standard"
            value={user.contraseña}
            onChange={onChangeUser}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Correo"
            fullWidth
            autoComplete="email"
            variant="standard"
            value={user.email}
            onChange={onChangeUser}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="telefono"
            name="telefono"
            label="Telefono"
            fullWidth
            autoComplete="tel"
            variant="standard"
            value={user.telefono}
            onChange={onChangeUser}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ciudad"
            select
            fullWidth
            name="ciudadId"
            label="Ciudad"
            value={ciudad.ciudadId || ""}
            onChange={onChangeCiudad}
          >
            {ciudades?.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="provincia"
            name="provinciaId"
            label="Provincia"
            fullWidth
            select
            // value={provincia.provinciaId}
            value={provincia.provinciaId || ""}
            onChange={onChangeProvincia}
          >
            {provincias?.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid> */}
      </Grid>
    </React.Fragment>
  );
}

export default RegisterUser