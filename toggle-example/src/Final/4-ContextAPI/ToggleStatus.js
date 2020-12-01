import React from "react";

/// importa o context 
import { useToggle } from "./ToggleContext";

const ToggleStatus = () => {
   const { toggle } = useToggle(); /// recebe o context e dá um destruction nele para receber o toggle
  return <p>The Status is {toggle ? "ON" : "OFF"}</p>;
};

export default ToggleStatus;
