import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "./HeaderStyles";

export const ButtonHeader = ({ clickEvent, icon }) => {
    return (
        <Button onClick={clickEvent}><FontAwesomeIcon icon={icon} /></Button>
    )
}