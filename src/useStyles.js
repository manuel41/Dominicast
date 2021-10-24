import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6),
        backgroundColor: 'lightgray'
    },
    footerContainer: {
        padding: theme.spacing(3, 0, 4),
    },
    icon: {
        marginRight: '20px',
        marginLeft: '40px'
    },
    app: {
        textAlign: 'center',
        marginTop: '70px'
    }

}));
