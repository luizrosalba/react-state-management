import React, { Component } from "react";

import ToggleStatus from "./ToggleStatus";
import ToggleButton from "./ToggleButton";

// const Toggle = () => {
class Toggle extends Component{



  /// a solução abaixo está errada ! 
  // nao devemos chamar o state atual dentro do setstate! 
  // fazer o handle na variavel global nao garante 
  // que pegaremos o estado mais atualizado 
  // o correto seria usar passar uma function assíncronas 

 // solução incorreta 
  //  state ={
  //    toggle:false
  //  };
  //  handleToggle = () => {
  //    this.setState({toggle: !this.state.toggle}); 
  //  }
 


// solução correta  
/// pegamos o ultimo estado corretamente 
/// e nao o ultimo estado desatualizado 
    state ={
     toggle:false
   };
  
   handleToggle = () => {
     this.setState( (prevState) => {
       return {
        toggle:!prevState.toggle
       }
     }); 
   }
 



  render (){
    return (
      <div>

        <p>The status is: {this.state.toggle? "ON" : "OFF"} </p>
        <button onClick={this.handleToggle}> Toggle </button>


        {/* <ToggleStatus />
        <ToggleButton /> */}


      </div>
    );
  }
  
   
};

export default Toggle;
