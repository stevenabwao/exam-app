import React from 'react';
import DrawerButton from '../SideDrawer/DrawerButton'
import './Toolbar.css'

const toolbar = props =>(
    <header className="toolbar">
        <nav className = "toolbar-nav">
            <div>
                <DrawerButton click={props.drawerClickHandler} />
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

export default toolbar
