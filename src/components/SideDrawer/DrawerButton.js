import React from 'react';
import "./DrawerButton.css"

const drawerButton = props =>(
 <button onClick={props.click} className= "toggleButton" >
     <div className = "button-line" />
     <div className = "button-line" />
     <div className = "button-line" />
 </button>
);

 
export default drawerButton