import { Container, Typography, Paper, Box, Button, StepLabel, Stepper, Step } from "@mui/material"
// import { makeStyles } from "@mui/styles"
import { useState } from "react";
import CreateProfile2 from "./components/CreateProfile2";
import DetallesPerfil from "./components/DetallesPerfil";
import RegisterUser from "./components/RegisterUser";
import { useUserUpdate } from "./components/UserContext";
import { useAppContext } from './components/AppContext';

const steps = ['Detalles Usuario', 'Perfil', 'Destrezas'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <RegisterUser />;
    case 1:
      return <CreateProfile2 />;
    case 2:
      return <DetallesPerfil />;
    default:
      throw new Error('Unknown step');
  }
}

const CreateProfile = () => {
  const { currentUserId } = useAppContext();

  const { registerNewUser, updateUser } = useUserUpdate()
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    console.log(activeStep);
    if (activeStep === 2) {
      if (currentUserId > 0) {
        updateUser();
      }
      else {
        registerNewUser();
      }
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Registro
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <>
            {activeStep === steps.length ? (
              <>
                <Typography variant="h5" gutterBottom>
                  Accion realizada con exito!
                </Typography>
              </>
            ) : (
              <>
                {getStepContent(activeStep)}
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                      Atras
                    </Button>
                  )}

                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                  >
                    {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente'}
                  </Button>
                </Box>
              </>
            )}
          </>
        </Paper>
      </Container>
    </>
  )
}

export default CreateProfile
