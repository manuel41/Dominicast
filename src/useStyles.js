import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6),
        backgroundColor: 'lightgray'
    },
    footerContainer: {
        padding: theme.spacing(3, 0, 4),
    },
    paginationContainer: {
        padding: theme.spacing(3, 0, 4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        marginRight: '20px',
        marginLeft: '40px'
    },
    cardGrid: {
        padding: '20px 0',

    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    cardMedia: {
        paddingTop: '56.25%'
    },
    cardContent: {
        flexGrow: '1'
    },

}));
