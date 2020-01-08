import React from 'react';
import './Toolbar.css'
import Logo from './logo1.png'



const header = props =>(
    <header className="toolbar">
        <nav className = "toolbar-nav">
        <div className="image">
                  <img
                    alt="..."
                    src={Logo} style={{width:"50px"}}
                  />
                </div>
            <div className = "toolbar-logo"><a href = "/">Exam App</a></div>
            <div className="spacer" />
            <div className = "nav-items">
                <ul>
                   <li><a href ="/forgetpassword">Forget password</a></li> 
                    
                    <li><a href ="/register">Signup</a></li>
                
                </ul>
            </div>
            
        </nav>
    </header>
)

export default header
