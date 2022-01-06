import React from "react";
import { Header, HeaderSearch } from "./HeaderStyles";
import { faCompass, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./HeaderStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WeatherHeader = ({ referencia, onUpdate, onInputChange, onSearch }) => {
  return (
    <Header>
      <HeaderSearch>
        <input ref={referencia} onChange={onInputChange} type="text" placeholder="Ingresa una ciudad/país" />
        <Button onClick={onSearch}><FontAwesomeIcon icon={faSearchLocation}/></Button>
      </HeaderSearch>
      <Button onClick={onUpdate}><FontAwesomeIcon icon={faCompass}/></Button>
    </Header>
  )
}
export default WeatherHeader;