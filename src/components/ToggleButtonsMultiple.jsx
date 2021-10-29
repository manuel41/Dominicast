import * as React from 'react';
// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import theme from '../theme';
// import { makeStyles } from '@mui/styles';


// const useStyles = makeStyles((theme) => ({
//     filters: {
//         marginBottom: '20px',
//     },
// }));




export default function ToggleButtonsMultiple(props) {

    const handleFormat = (event, newFormats) => {
        if (newFormats.includes('Limpiar'))
            newFormats = [];
        props.setFilter(newFormats);
    };

    return (
        <ToggleButtonGroup
            size="small"
            orientation="horizontal"
            value={props.filter}
            onChange={handleFormat}
            aria-label="text formatting"
            sx='object'
            className='filters'
            fullWidth
        >
            <ToggleButton value="Limpiar">
                Limpiar
            </ToggleButton>
            <ToggleButton value="sinBarba">
                Sin Barba
            </ToggleButton>
            <ToggleButton value="conBarba">
                Con Barba
            </ToggleButton>
            <ToggleButton value="sinTatuajes">
                Sin Tatuajes
            </ToggleButton>
            <ToggleButton value="conTatuajes">
                Con Tatuajes
            </ToggleButton>
        </ToggleButtonGroup>
    );
}
