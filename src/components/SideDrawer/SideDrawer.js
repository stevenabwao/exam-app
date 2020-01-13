import React from 'react';

import './sideDrawer.css'
const sideDrawer = props =>(
     <nav className="sideDrawer">
         <ul>
         <li><a href ="/home">Dashbord</a></li>
           <li><a href ="/exams">Set Exam</a></li>
           <li><a href ="/">Resources</a></li>
           <li><a href ="/">Results</a></li>
           <li><a href ="/">Send Sms</a></li>
           <li><a href ="/">Logout</a></li>
           </ul>
     </nav>
);
 export default sideDrawer