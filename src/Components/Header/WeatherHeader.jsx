import React from "react";
import { Header, HeaderSearch } from "./HeaderStyles";
import { faCompass, faSearchLocation } from "@fortawesome/free-solid-svg-icons";
import { ButtonHeader } from "./ButtonHeader";

const WeatherHeader = ({ referencia, onUpdate, onInputChange, onSearch }) => {
  return (
    <Header>
      <HeaderSearch>
        <input ref={referencia} onChange={onInputChange} type="text" placeholder="Ingresa una ciudad/país" />
        <ButtonHeader clickEvent={onSearch} icon={faSearchLocation} />
      </HeaderSearch>
      <ButtonHeader clickEvent={onUpdate} icon={faCompass} />
    </Header>
  )
}
export default WeatherHeader;