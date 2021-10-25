import * as React from 'react';
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText } from '@mui/material';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

export default function DetallesPerfil() {

  const [tipoActor, setTipoActor] = React.useState({
    cine: false,
    teatro: false,
    comercial: false,
    voz: false,
  });
  const [tipoModelo, setTipoModelo] = React.useState({
    general: false,
    manos: false,
    piernas: false,
    dientes: false,
    codos: false,
  });
  const [habilidades, setHabilidades] = React.useState({
    canto: false,
    baile: false,
    cartas: false,
  });

  const handleChange = (event) => {
    setTipoActor({
      ...tipoActor,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange2 = (event) => {
    setTipoModelo({
      ...tipoModelo,
      [event.target.name]: event.target.checked,
    });
  };
  const handleChange3 = (event) => {
    setHabilidades({
      ...habilidades,
      [event.target.name]: event.target.checked,
    });
  };

  const { cine, teatro, comercial, voz } = tipoActor;
  const { general, manos, piernas, dientes, codos } = tipoModelo;
  const { canto, baile, cartas } = habilidades;
  const error = [cine, teatro, comercial, voz].filter((v) => v).length !== 2;



  return (
    <React.Fragment>
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
                  <Checkbox checked={cine} onChange={handleChange} name="cine" />
                }
                label="Cine"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={teatro} onChange={handleChange} name="teatro" />
                }
                label="Teatro"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={comercial} onChange={handleChange} name="comercial" />
                }
                label="Comercial"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={voz} onChange={handleChange} name="voz" />
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
                  <Checkbox checked={general} onChange={handleChange2} name="general" />
                }
                label="General"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={manos} onChange={handleChange2} name="manos" />
                }
                label="Manos"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={piernas} onChange={handleChange2} name="piernas" />
                }
                label="Piernas/Pies"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={dientes} onChange={handleChange2} name="dientes" />
                }
                label="Dientes"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={codos} onChange={handleChange2} name="codos" />
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
                  <Checkbox checked={canto} onChange={handleChange3} name="canto" />
                }
                label="Canto"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={baile} onChange={handleChange3} name="baile" />
                }
                label="Baile"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={cartas} onChange={handleChange3} name="cartas" />
                }
                label="Maestro de cartas"
              />
            </FormGroup>
            <FormHelperText>Elija todos los que apliquen</FormHelperText>
          </FormControl>
        </Grid>
      </Grid>

    </React.Fragment>
  );
}