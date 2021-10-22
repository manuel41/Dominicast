import { makeStyles } from '@mui/styles';
import { display } from '@mui/system';

export const useStyles = makeStyles((theme) => ({
    container: {
        padding: theme.spacing(8, 0, 6),
        backgroundColor:'lightgray'
    },
    icon: {
        marginRight: '20px',
        marginLeft: '40px'
    },
    cardGrid:{
        padding: '20px 0',

    },
    card:{
        height:'100%',
        display:'flex',
        flexDirection:'column'
    },
    cardMedia:{
        paddingTop:'56.25%'
    },
    cardContent:{
        flexGrow:'1'
    }

}));
