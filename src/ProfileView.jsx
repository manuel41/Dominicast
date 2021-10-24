import { Container, Divider, Grid, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    padding: 'auto'
  },
  paperRoot: {
    padding: theme.spacing(3)
  },
  paper: {
    width: '100%',
    padding: theme.spacing(8, 2)
  },
  mainProfileDetailsGrid: {
    marginBottom: theme.spacing(3)
  },
  imgGrid: {
    margin: theme.spacing(2),
    justifyContent: 'flex-end',
  },
  img: {
    width: '100%',
  },
  personalDetails: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  h2: {
    marginTop: theme.spacing(5),
    textAlign: 'center'
  },
  detailText: {
    margin: theme.spacing(4, 4)
  },
}));

const ProfileView = () => {
  const classes = useStyles()

  const persona = {
    "detallesPerfilId": 1,
    "colorPiel": {
      "colorPielId": 1,
      "color": "blanco"
    },
    "colorCabello": {
      "colorCabelloId": 1,
      "color": "negro"
    },
    "colorOjos": {
      "colorOjosId": 1,
      "color": "marron"
    },
    "tipoPiel": {
      "tipoPielId": 1,
      "descripcion": "string"
    },
    nombre: "Luis",
    apellido: "Perez",
    genero: "string",
    foto: "binary",
    edad: 18,
    peso: 200,
    altura: 185,
    tatuajes: true,
    piercings: false,
    bigote: false,
    barba: false,
    bracers: false,
    lentes: false,
    disposicion: false,
    "tipoUsuario": 3,
    "tipoModelos": [
      {
        "tipoModeloId": 1,
        "descripcion": "General"
      },
      {
        "tipoModeloId": 2,
        "descripcion": "Manos"
      },
      {
        "tipoModeloId": 3,
        "descripcion": "Piernas/Pies"
      },
      {
        "tipoModeloId": 4,
        "descripcion": "Dientes"
      },
      {
        "tipoModeloId": 5,
        "descripcion": "Codos"
      }
    ],
    "tipoActors": [
      {
        "tipoActorId": 1,
        "descripcion": "Cine"
      },
      {
        "tipoActorId": 2,
        "descripcion": "Teatro"
      },
      {
        "tipoActorId": 3,
        "descripcion": "Comercial"
      },
      {
        "tipoActorId": 4,
        "descripcion": "Actor de Voz"
      }
    ],
    "habilidad": {
      "habilidadId": 1,
      "descripcion": "string"
    }
  }

  return (
    <>
      <Container className={classes.container}>
        {/* <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" className={classes.header}>Página de Perfil</Typography>
        </Box> */}
        <Paper className={classes.paperRoot}>
          <Grid container className={classes.mainProfileDetailsGrid} spacing={2}>
            <Grid item xs={12} md={6} className={classes.imgGrid}>
              <Box component="img" className={classes.img} src="https://source.unsplash.com/random" />
            </Grid>
            <Grid container item xs={12} md={6} className={classes.personalDetails}>
              <Paper className={classes.paper} elevation={3}>
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Nombres: {persona.nombre}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Apellidos: {persona.apellido}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Edad: {persona.edad}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Peso: {persona.peso}lb</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Altura: {persona.altura}cm</Typography>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ marginTop: 5 }}>
            <Typography variant="h2" sx={{ textAlign: 'center' }}>Más Detalles</Typography>
          </Box>
          <Divider />
          <Paper className={classes.paper} sx={{ marginTop: 2 }} elevation={4}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de piel: {persona.colorPiel.color}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de cabello: {persona.colorCabello.color}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de ojos: {persona.colorOjos.color}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Tez: {persona.tipoPiel.descripcion}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Tatuajes: {persona.tatuajes ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Piercings: {persona.piercings ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Bigote: {persona.bigote ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Barba: {persona.barba ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Ortodoncia: {persona.bracers ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Lentes: {persona.lentes ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Dispocición a cambios de apariencia radicales: {persona.disposicion ? "Si" : "No"}</Typography>
              </Grid>
              {(persona.tipoUsuario == 1 || persona.tipoUsuario == 3) &&
                <Grid container item spacing={2}>
                  <Grid item sx={{ marginTop: 0 }} xs={12}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Detalles de Actor</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {persona.tipoActors.map((tipoActor) => (
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5">{tipoActor.descripcion}</Typography>
                    </Grid>
                  ))}
                </Grid>}
              {(persona.tipoUsuario == 2 || persona.tipoUsuario == 3) &&
                <Grid container item spacing={2}>
                  <Grid item sx={{ marginTop: 0 }} xs={12}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Detalles de Modelo</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {persona.tipoModelos.map((tipoModelo) => (
                    <Grid item xs={12} md={6}>
                      <Typography variant="h5">{tipoModelo.descripcion}</Typography>
                    </Grid>
                  ))}
                </Grid>}
            </Grid>
          </Paper>
        </Paper>
      </Container>
    </>
  )
}

export default ProfileView
