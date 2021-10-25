import { createTheme } from '@mui/material/styles'
const theme = createTheme({
    typography: {
        fontFamily: ['"Arima Madurai"', 'Open Sans'].join(',')
    },
    palette: {
        primary: { main: '#003166' },
        secondary: {
            main: '#792836',
            light: '#C0203C',
        },
        neutral: {
            main: '#D8D8D8',
            light: '#313030',

        },
    }
})

export default theme;