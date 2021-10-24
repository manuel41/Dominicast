import React from "react";
import { ToggleButton } from '@mui/material';


function FilterButton(props) {
    return (
        <ToggleButton type="button" selected={props.selected} aria-pressed={props.isPressed} onClick={() => props.setFilter(props.attributes)}>
            <span>{props.name} </span>
        </ToggleButton>
    );
}

export default FilterButton;