import React from 'react';
import DrawerButton from '../SideDrawer/DrawerButton'
import Logo from '../login/Header/logo1.png'
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                <DrawerButton click={props.drawerClickHandler} />
            </div>
            <div>
            <img
                    alt="..."
                    src={Logo} style={{width:"50px"}}
                  />
            </div>
            <div className="toolbar-logo"><a href="/">Exam App</a></div>
            <div className="spacer" />
            <div className="nav-items">
                <ul>
                    <li><a href="/">notifications</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>

        </nav>
    </header>
)

export default toolbar
