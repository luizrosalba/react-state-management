import React, { useState } from "react";

 const ToggleFunc = () => {  

/// pegamos o ultimo estado corretamente 
/// e nao o ultimo estado desatualizado 
const [toggle,setToggle] = useState (false) /// array com duas posicoes 

const handleToggle = () => setToggle ( (prevState) => !prevState);

    return (
      <div>
        <p>The status is: {toggle? "ON" : "OFF"} </p>
        <button onClick={handleToggle}> Toggle </button>
      </div>
    );
   
};

export default ToggleFunc;
