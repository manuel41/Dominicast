import { createTheme } from '@mui/material/styles'
const theme = createTheme({
    typography: {
        fontFamily: ['"Arima Madurai"', 'Open Sans'].join(',')
    },
    palette: {
        primary: { main: '#003166' },
        secondary: {
            main: '#792836',
            lighter: '#792836',
        },
        neutral: {
            main: '#D8D8D8',
        },
    }
})

export default theme;