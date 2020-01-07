import React from 'react';
import './Toolbar.css'

const header = props =>(
    <header className="toolbar">
        <nav className = "toolbar-nav">
        <div className="image">
                  <img
                    alt="..."
                    src="./src/assets/logo.png"
                  />
                </div>
            <div className = "toolbar-logo"><a href = "/">Exam App</a></div>
            <div className="spacer" />
            <div className = "nav-items">
                <ul>
                    <li><a href ="/">Forget password</a></li>
                    
                    <li><a href ="/">Signup</a></li>
                </ul>
            </div>
            
        </nav>
    </header>
)

export default header
