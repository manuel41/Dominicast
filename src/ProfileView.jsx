import { useState, useEffect } from 'react';
import { Container, Divider, Grid, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router';
import { useAppContext } from './components/AppContext';
import apiRequest from './api/Requests';

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
  mainDetails: {
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
  let { id } = useParams();
  const { ojos, coloresPiel, cabellos, tipoActores, tipoModelos, tipoHabilidades } = useAppContext();

  const [profileDetails, setProfileDetails] = useState()

  useEffect(() => {
    const fetchProfileDetail = async () => {
      const res = await apiRequest(`{\r\n	getDetailsById(id: ${id}){\r\n    nombre,\r\n    apellido,\r\n    foto,\r\n    edad,\r\n    peso,\r\n    altura,\r\n    colorPielId,\r\n    colorOjosId,\r\n    colorCabelloId,\r\n    tatuajes,\r\n    bigote,\r\n    barba,\r\n    bracers,\r\n    lentes,\r\n    disposicion,\r\n    tipoUsuario,\r\n    tipoactores{\r\n      tipoActorId\r\n    }\r\n    tipomodelos{\r\n      tipoModeloId\r\n    }\r\n    habilidades{\r\n      habilidadId\r\n    }\r\n  }\r\n}`)
      setProfileDetails(res.data.getDetailsById);
    }
    fetchProfileDetail();
  }, [id])

  return (
    <>
      {/* <Typography variant="h1">{profileDetails.tipoModelos[0].nombre}</Typography> */}
      <Container className={classes.container}>
        {/* <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h1" className={classes.header}>Página de Perfil</Typography>
        </Box> */}
        <Paper className={classes.paperRoot}>
          <Grid container className={classes.mainProfileDetailsGrid} spacing={2}>
            <Grid item xs={12} md={6} className={classes.imgGrid}>
              <Box component="img" className={classes.img} src={profileDetails?.foto} />
            </Grid>
            <Grid container item xs={12} md={6} className={classes.mainDetails}>
              <Paper className={classes.paper} elevation={3}>
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Nombres: {profileDetails?.nombre}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Apellidos: {profileDetails?.apellido}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Edad: {profileDetails?.edad}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Peso: {profileDetails?.peso}lb</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Altura: {profileDetails?.altura}cm</Typography>
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
                <Typography variant="h5">Color de piel: {coloresPiel[1]}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de cabello: {cabellos[profileDetails?.colorCabelloId]}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de ojos: {ojos[profileDetails?.colorOjosId]}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Tatuajes: {profileDetails?.tatuajes ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Piercings: {profileDetails?.piercings ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Bigote: {profileDetails?.bigote ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Barba: {profileDetails?.barba ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Ortodoncia: {profileDetails?.bracers ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Lentes: {profileDetails?.lentes ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Dispocición a cambios de apariencia radicales: {profileDetails?.disposicion ? "Si" : "No"}</Typography>
              </Grid>
              {(profileDetails?.tipoUsuario === 1 || profileDetails?.tipoUsuario === 3) &&
                <Grid container item spacing={2}>
                  <Grid item sx={{ marginTop: 0 }} xs={12}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Detalles de Actor</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {profileDetails?.tipoactores.map((tipoActor) => (
                    <Grid item xs={12} md={6} key={tipoActor.tipoActorId}>
                      <Typography variant="h5">{tipoActores[tipoActor.tipoActorId]}</Typography>
                    </Grid>
                  ))}
                </Grid>}
              {(profileDetails?.tipoUsuario === 2 || profileDetails?.tipoUsuario === 3) &&
                <Grid container item spacing={2}>
                  <Grid item sx={{ marginTop: 0 }} xs={12}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Detalles de Modelo</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {profileDetails?.tipomodelos.map((tipoModelo) => (
                    <Grid item xs={12} md={6} key={tipoModelo.tipoModeloId}>
                      <Typography variant="h5">{tipoModelos[tipoModelo.tipoModeloId]}</Typography>
                    </Grid>
                  ))}
                </Grid>}
              <Grid container item spacing={2}>
                <Grid item sx={{ marginTop: 0 }} xs={12}>
                  <Typography variant="h2" sx={{ textAlign: 'center' }}>Habilidades</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider />
                </Grid>
                {profileDetails?.habilidades.map((habilidad) => (
                  <Grid item xs={12} md={6} key={habilidad.habilidadId}>
                    <Typography variant="h5">{tipoHabilidades[habilidad.habilidadId]}</Typography>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Paper>
        </Paper>
      </Container>
    </>
  )
}

export default ProfileView
