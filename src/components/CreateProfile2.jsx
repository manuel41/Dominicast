import * as React from 'react';
import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { MenuItem } from '@mui/material';
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

  const url = "http://localhost:5000"

  const [gender, setGender] = useState('')
  const [tatuajes, setTatuajes] = useState('')
  const [piercings, setPiercings] = useState('')
  const [bigote, setBigote] = useState('')
  const [barba, setBarba] = useState('')
  const [bracers, setBracers] = useState('')
  const [lentes, setLentes] = useState('')
  const [dispocion, setDisposicion] = useState('')
  const [ojos, setOjos] = useState([])
  const [ojo, setOjo] = useState('')
  const [coloresPiel, setColoresPiel] = useState([])
  const [piel, setPiel] = useState()
  const [cabellos, setCabellos] = useState([])
  const [cabello, setCabello] = useState()

  const selectGender = (e) => {
    setGender(e.target.value);
  }

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
            id="nombres"
            name="nombres"
            label="Nombres"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="apellidos"
            name="apellidos"
            label="Apellidos"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="genero"
            name="genero"
            label="Genero"
            fullWidth
            select
            value={gender}
            onChange={selectGender}
          >
            {genders.map((gender) => (
              <MenuItem key={gender.id} value={gender.id}>
                {gender.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="edad"
            name="edad"
            label="Edad"
            fullWidth
            variant="standard"
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="ojos"
            name="ojos"
            label="Color de ojos"
            fullWidth
            select
            value={ojo}
            onChange={(e) => { setOjo(e.target.value) }}
          >
            {ojos?.map((ojo) => (
              <MenuItem key={ojo.id} value={ojo.id}>
                {ojo.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="piel"
            name="piel"
            label="Color de piel"
            fullWidth
            select
            value={piel}
            onChange={(e) => { setColoresPiel(e.target.value) }}
          >
            {coloresPiel?.map((piel) => (
              <MenuItem key={piel.id} value={piel.id}>
                {piel.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cabello"
            name="cabello"
            label="Color de cabello"
            fullWidth
            select
            value={cabello}
            onChange={(e) => { setCabellos(e.target.value) }}
          >
            {coloresPiel?.map((cabello) => (
              <MenuItem key={cabello.id} value={cabello.id}>
                {cabello.nombre}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="tatuajes"
            name="tatuajes"
            label="Tiene Tatuajes?"
            fullWidth
            select
            value={tatuajes}
            onChange={(e) => { setTatuajes(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="piercings"
            name="piercings"
            label="Tiene Piercings?"
            fullWidth
            select
            value={piercings}
            onChange={(e) => { setPiercings(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="bigote"
            name="bigote"
            label="Tiene bigote?"
            fullWidth
            select
            value={bigote}
            onChange={(e) => { setBigote(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="barba"
            name="barba"
            label="Tiene barba?"
            fullWidth
            select
            value={barba}
            onChange={(e) => { setBarba(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="bracers"
            name="bracers"
            label="Tiene bracers?"
            fullWidth
            select
            value={bracers}
            onChange={(e) => { setBracers(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="lentes"
            name="lentes"
            label="Tiene lentes?"
            fullWidth
            select
            value={lentes}
            onChange={(e) => { setLentes(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="disposicion"
            name="disposicion"
            label="Está dispuesto a cambios de apariencia rádicales?"
            fullWidth
            select
            value={dispocion}
            onChange={(e) => { setDisposicion(e.target.value) }}
          >
            {options.map((option) => (
              <MenuItem key={option.id} value={option.id}>
                {option.description}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}