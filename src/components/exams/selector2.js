import React from "react";
import Select from 'react-select'






  const options=[
    { value: 'Maths', label: 'Maths' },
    { value: 'English', label: 'English' },
    { value: 'Chemistry', label: 'Chemistry' },
    { value: 'Physics', label: 'physics' }
  ]

const Selector = () => {
  return (

    <div>
        <Select options={options} />
    </div>
        
  );
  }

export default Selector