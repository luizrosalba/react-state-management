import React, { useState } from "react";

 const Toggle = () => {  

/// pegamos o ultimo estado corretamente 
/// e nao o ultimo estado desatualizado 
const [toggle,setToggle] = useState (false) /// array com duas posicoes 

const handleToggle = () => setToggle ( (prevState) => !prevState);
    return (
      <div>
        <ToggleStatus toggle={toggle} />
        <ToggleButton handleToggle={handleToggle}></ToggleButton>
      </div>
    );
};

const ToggleStatus = ({toggle}) => (
    <p>The status is: {toggle? "ON" : "OFF"} </p> 
);

const ToggleButton = ({handleToggle}) => (
    <button onClick={handleToggle}> Toggle </button>
);

export default Toggle;
