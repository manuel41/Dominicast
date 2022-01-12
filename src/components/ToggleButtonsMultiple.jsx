import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import Typography from '@mui/material/Typography';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import TransgenderIcon from '@mui/icons-material/Transgender';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


export default function ToggleButtonsMultiple(props) {

    const handleFormat = (event, newFormats) => {
        if (newFormats.includes('male') && newFormats.includes('female')) {
            let toDelete = Math.min(newFormats.indexOf('male'), newFormats.indexOf('female'))
            newFormats.splice(toDelete, 1);
        }
        if (newFormats.includes('other') && newFormats.includes('female')) {
            let toDelete = Math.min(newFormats.indexOf('other'), newFormats.indexOf('female'))
            newFormats.splice(toDelete, 1);
        }
        if (newFormats.includes('other') && newFormats.includes('male')) {
            let toDelete = Math.min(newFormats.indexOf('other'), newFormats.indexOf('male'))
            newFormats.splice(toDelete, 1);
        }
        if (newFormats.includes('sinBarba') && newFormats.includes('conBarba')) {
            let toDelete = Math.min(newFormats.indexOf('sinBarba'), newFormats.indexOf('conBarba'))
            newFormats.splice(toDelete, 1);
        }
        if (newFormats.includes('sinTatuajes') && newFormats.includes('conTatuajes')) {
            let toDelete = Math.min(newFormats.indexOf('sinTatuajes'), newFormats.indexOf('conTatuajes'))
            newFormats.splice(toDelete, 1);
        }
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
                        <Typography>Género</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ToggleButtonGroup
                            size="small"
                            orientation="horizontal"
                            value={props.filter}
                            onChange={handleFormat}
                            aria-label="text formatting"
                            //sx={ }
                            className='filters'
                            fullWidth
                        >
                            <ToggleButton color="primary" value="female">
                                Femenino
                            </ToggleButton>
                            <ToggleButton color="primary" value="male">
                                Masculino
                            </ToggleButton>
                            <ToggleButton color="primary" value="other">
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
                            //sx={ }
                            className='filters'
                            fullWidth
                        >
                            <ToggleButton color="primary" value="menor">
                                Menor
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad18a25">
                                18 a 25
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad26a45">
                                26 a 45
                            </ToggleButton>
                            <ToggleButton color="primary" value="edad46a60">
                                46 a 60
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
                            //sx={ }
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
                            //sx={ }
                            className='filters'
                            fullWidth
                        >

                            <ToggleButton color="primary" value="sinBarba">
                                Sin bello facial
                            </ToggleButton>
                            <ToggleButton color="primary" value="conBarba">
                                Con bello facial
                            </ToggleButton>
                            <ToggleButton color="primary" value="sinTatuajes">
                                Sin Tatuajes
                            </ToggleButton>
                            <ToggleButton color="primary" value="conTatuajes">
                                Con Tatuajes
                            </ToggleButton>
                        </ToggleButtonGroup>
                        <ToggleButtonGroup
                            size="small"
                            orientation="horizontal"
                            value={props.filter}
                            onChange={handleFormat}
                            aria-label="text formatting"
                            //sx={ }
                            className='filters'
                            fullWidth
                        >

                            <ToggleButton color="primary" value="piercings">
                                Piercings
                            </ToggleButton>
                            <ToggleButton color="primary" value="disposicion">
                                Dispocición a cambios físicos
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </AccordionDetails>
                </Accordion>
                <ToggleButtonGroup
                    value={props.filter}
                    onChange={handleFormat}>
                    <ToggleButton value="Limpiar">
                        Limpiar filtros<DeleteOutlineTwoToneIcon />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>









        </div >
    );
}
