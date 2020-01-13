import React from "react";
import Toolbar from '../Toolbar/Toolbar'
import Select from 'react-select'

import './exam.css'
import Selector from "./selector2";




const options = [
    { value: 'form1', label: 'form1' },
    { value: 'form2', label: 'form2' },
    { value: 'form3', label: 'form3' },
    { value: 'form4', label: 'form4' }
  ]
 
const Exams = () => {
  return (
    <div className='exams'>
        <Toolbar />
        <div className="exams-page">
        <Select options={options} /><br></br>
        <Selector/>
        </div>
  <div {...<button className = 'full-btn'>Add question</button>}/>

    </div>
        
  );
  }

export default Exams