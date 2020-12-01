import React from "react";

import { useToggle } from "./ToggleContext";

const ToggleButton = () => {
  const { handleToggle } = useToggle();  // recebe o context e dá um destruct nele para receber handle tooggle
  return <button onClick={handleToggle}>Toggle</button>;
};
export default ToggleButton;
