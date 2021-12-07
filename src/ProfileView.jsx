import { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Divider, Grid, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import { useParams } from 'react-router';

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
  const url = "http://localhost:5000/Persons"
  let { id } = useParams();

  const [profileDetails, setProfileDetails] = useState()
  // const [loading, setLoading] = useState(false)
  // let persona1 = {}

  useEffect(() => {
    const fetchProfileDetail = async () => {
      const res = await axios.get(`${url}/${id}`);
      setProfileDetails(res.data);
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
              <Box component="img" className={classes.img} src={profileDetails?.detallePerfil.url} />
            </Grid>
            <Grid container item xs={12} md={6} className={classes.mainDetails}>
              <Paper className={classes.paper} elevation={3}>
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Nombres: {profileDetails?.detallePerfil.nombre}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Apellidos: {profileDetails?.detallePerfil.apellido}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Edad: {profileDetails?.detallePerfil.edad}</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Peso: {profileDetails?.detallePerfil.peso}lb</Typography>
                </Grid>
                <Divider />
                <Grid item className={classes.detailText}>
                  <Typography variant="h4">Altura: {profileDetails?.detallePerfil.altura}cm</Typography>
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
                <Typography variant="h5">Color de piel: {profileDetails?.detallePerfil.colorPiel.color}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de cabello: {profileDetails?.detallePerfil.colorCabello.color}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Color de ojos: {profileDetails?.detallePerfil.colorOjos.color}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Tatuajes: {profileDetails?.detallePerfil.tatuajes ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Piercings: {profileDetails?.detallePerfil.piercings ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Bigote: {profileDetails?.detallePerfil.bigote ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Barba: {profileDetails?.detallePerfil.barba ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Ortodoncia: {profileDetails?.detallePerfil.bracers ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h5">Lentes: {profileDetails?.detallePerfil.lentes ? "Si" : "No"}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h5">Dispocición a cambios de apariencia radicales: {profileDetails?.detallePerfil.disposicion ? "Si" : "No"}</Typography>
              </Grid>
              {(profileDetails?.tipoUsuario === 1 || profileDetails?.tipoUsuario === 3) &&
                <Grid container item spacing={2}>
                  <Grid item sx={{ marginTop: 0 }} xs={12}>
                    <Typography variant="h2" sx={{ textAlign: 'center' }}>Detalles de Actor</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                  {profileDetails?.tipoActors.map((tipoActor) => (
                    <Grid item xs={12} md={6} key={tipoActor.tipoActorId}>
                      <Typography variant="h5">{tipoActor.nombre}</Typography>
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
                  {profileDetails?.tipoModelos.map((tipoModelo) => (
                    <Grid item xs={12} md={6} key={tipoModelo.tipoModeloId}>
                      <Typography variant="h5">{tipoModelo.nombre}</Typography>
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
                {profileDetails?.habilidad.map((habilidad) => (
                  <Grid item xs={12} md={6} key={habilidad.habilidadId}>
                    <Typography variant="h5">{habilidad.nombre}</Typography>
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
