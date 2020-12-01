import React, { createContext, useState, useContext } from "react";

/// poderia passar um initial state 
const toggleContext = createContext();

export const ToggleProvider = props => {
/// será o provedor do estado 
/// todos com acesso a esse contexto acessam o estado e seus metodos 
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(prevState => !prevState);
  return (
    <toggleContext.Provider value={{ toggle, handleToggle }}>
      {/* renderiza o children  */}
      {props.children}  

    </toggleContext.Provider>
  );
};


// permite usar um jeito pratico de acessar o context sem ter que chamar o use context
// a todo momento 

export const useToggle = () => {
  const context = useContext(toggleContext); /// pega o context 

  if (!context) throw new Error("Context Undefined");  /// se estier fora do copntext dará erro

  return context;
};
