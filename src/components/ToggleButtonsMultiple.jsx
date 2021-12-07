import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Typography from '@mui/material/Typography';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ToggleButtonsMultiple(props) {

    const handleFormat = (event, newFormats) => {
        if (newFormats.includes('Limpiar'))
            newFormats = [];
        props.setFilter(newFormats);
    };

    return (
        <div>

            <div>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Categorías generales</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                            <ToggleButton color="primary" value="cine">
                                Cine
                            </ToggleButton>
                            <ToggleButton color="primary" value="teatro">
                                Teatro
                            </ToggleButton>
                            <ToggleButton color="primary" value="voz">
                                Voz
                            </ToggleButton>
                            <ToggleButton color="primary" value="modelo">
                                Modelo
                            </ToggleButton>
                            <ToggleButton color="primary" value="otros">
                                Otros
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Edad</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                            <ToggleButton color="primary" value="Menor">
                                Menor de edad
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad18a25">
                                18 a 25 años
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad26a45">
                                26 a 45 años
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad46a60">
                                46 a 60 años
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad60+">
                                60+ años
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Estatura</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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
                            <ToggleButton color="primary" value="150cm">
                                Menor de 150cm
                            </ToggleButton>
                            <ToggleButton color="primary" value="151a170cm">
                                151 a 170cm
                            </ToggleButton>
                            <ToggleButton color="primary" value="171a190cm">
                                171 a 190cm
                            </ToggleButton>
                            <ToggleButton color="primary" value="210a230cm">
                                210 a 230cm
                            </ToggleButton>
                            <ToggleButton color="primary" value="231cm+">
                                231cm+
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Typography>Otros</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
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

                            <ToggleButton color="primary" value="sinBarba">
                                Sin Barba
                            </ToggleButton>
                            <ToggleButton color="primary" value="conBarba">
                                Con Barba
                            </ToggleButton>
                            <ToggleButton color="primary" value="sinTatuajes">
                                Sin Tatuajes
                            </ToggleButton>
                            <ToggleButton color="primary" value="conTatuajes">
                                Con Tatuajes
                            </ToggleButton>
                            <ToggleButton value="Limpiar">
                                <DeleteOutlineTwoToneIcon /> Limpiar
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
            </div>









        </div >
    );
}
