import React, { useState } from "react";

import Toggle from "./Toggle";
import ToggleFunc from "./ToggleFunc";
import ToggleClasse from "./ToggleClasse";

import ToggleStatus from "./ToggleStatus";
import { ToggleProvider } from "./ToggleContext";

const App = () => {
  return (
    <div>
        {/* agora o toggle pode acessar as informações do provider  */}
      <ToggleProvider>
        <Toggle/>
        {/* <ToggleStatus />  */}
      </ToggleProvider>
    </div>
  );



};

export default App;
