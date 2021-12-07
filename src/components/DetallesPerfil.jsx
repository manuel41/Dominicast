import React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useUser, useUserUpdate } from './UserContext';

export default function DetallesPerfil() {

  const { listaTipoActores, listaTipoModelos, listaHabilidades } = useUser()
  const { onChangeTipoActorCheckbox, onChangeTipoModeloCheckbox, onChangeHabilidadesCheckbox } = useUserUpdate()

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
                      <Checkbox checked={option.isChecked} onChange={onChangeTipoActorCheckbox} name={option.nombre} id={option.id.toString()} />
                    }
                    label={option.nombre}
                    key={option.id}
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
                      <Checkbox checked={option.isChecked} onChange={onChangeTipoModeloCheckbox} name={option.nombre} id={option.id.toString()} />
                    }
                    label={option.nombre}
                    key={option.id}
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
                      <Checkbox checked={option.isChecked} onChange={onChangeHabilidadesCheckbox} name={option.nombre} id={option.id.toString()} />
                    }
                    label={option.nombre}
                    key={option.id}
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