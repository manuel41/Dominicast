import * as React from 'react';
import { useState, useEffect } from 'react';
import { useUser, useUserUpdate } from './UserContext';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, MenuItem, Radio, RadioGroup } from '@mui/material';
import axios from 'axios';


export default function CreateProfile2() {

  const { detallesPerfil, colorOjos, colorPiel, colorCabello, ojos, coloresPiel, cabellos } = useUser()
  const { onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox, onChangeColorOjos, onChangeColorPiel, onChangeColorCabello } = useUserUpdate()

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
            helperText="En libras"
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
            helperText="En centimetros"
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
              value={colorOjos.colorOjosId || ""}
              onChange={onChangeColorOjos}
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
              value={colorPiel.colorPielId || ""}
              onChange={onChangeColorPiel}
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
              value={colorCabello.colorCabelloId || ""}
              onChange={onChangeColorCabello}
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