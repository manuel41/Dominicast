import * as React from 'react';
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
import axios from 'axios';

const RegisterUser = () => {

  const url = "http://localhost:5000"
  const [ciudades, setCiudades] = useState([])
  const [ciudad, setCiudad] = useState('')
  const [provincia, setProvincia] = useState('')
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


  const selectCity = (e) => {
    setCiudad(e.target.value)
  }

  const selectProvince = (e) => {
    setProvincia(e.target.value)
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
            id="user"
            name="user"
            label="Usuario"
            fullWidth
            autoComplete="username"
            variant="standard"
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="correo"
            name="correo"
            label="Correo"
            fullWidth
            autoComplete="email"
            variant="standard"
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
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="ciudad"
            select
            fullWidth
            name="ciudad"
            label="Ciudad"
            value={ciudad}
            onChange={selectCity}
          >
            {ciudades?.map((ciudad) => (
              <MenuItem key={ciudad.id} value={ciudad.id}>
                {ciudad.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="provincia"
            name="provincia"
            label="Provincia"
            fullWidth
            select
            value={provincia}
            onChange={selectProvince}
          >
            {provincias?.map((provincia) => (
              <MenuItem key={provincia.id} value={provincia.id}>
                {provincia.nombre}
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