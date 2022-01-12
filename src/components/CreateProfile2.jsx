import * as React from 'react';
import { useUser, useUserUpdate } from './UserContext';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup } from '@mui/material';


export default function CreateProfile2() {

  const { detallesPerfil, colorOjosId, colorPielId, colorCabelloId, ojos, coloresPiel, cabellos } = useUser()
  const { onChangeDetallesPerfil, onChangeDetallesPerfilCheckbox, onChangeColorOjosId, onChangeColorPielId, onChangeColorCabelloId } = useUserUpdate()

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
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="url"
            name="url"
            label="Foto"
            helperText="Pegar URL de imagen"
            fullWidth
            variant="standard"
            value={detallesPerfil.url || ""}
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
              <FormControlLabel value="0" control={<Radio />} label="Hombre" id="0" />
              <FormControlLabel value="1" control={<Radio />} label="Mujer" id="1" />
              <FormControlLabel value="2" control={<Radio />} label="Otros" id="2" />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Color de Ojos</FormLabel>
            <RadioGroup
              aria-label="eyes"
              name="colorOjosId"
              value={colorOjosId}
              onChange={onChangeColorOjosId}
            >
              {Object.keys(ojos).map((key) => (
                <FormControlLabel key={key} value={key} control={<Radio />} label={ojos[key]} />
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
              value={colorPielId}
              onChange={onChangeColorPielId}
            >
              {Object.keys(coloresPiel).map((key) => (
                <FormControlLabel key={key} value={key} control={<Radio />} label={coloresPiel[key]} />
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
              value={colorCabelloId}
              onChange={onChangeColorCabelloId}
            >
              {Object.keys(cabellos).map((key) => (
                <FormControlLabel key={key} value={key} control={<Radio />} label={cabellos[key]} />
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