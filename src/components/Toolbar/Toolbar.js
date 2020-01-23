import React from 'react';
import DrawerButton from '../SideDrawer/DrawerButton'
import Logo from '../login/Header/logo1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff,faBell } from "@fortawesome/free-solid-svg-icons";
import './Toolbar.css'

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar-nav">
            <div>
                
                <DrawerButton click={props.drawerHandler} />
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
                    <li><a href="/"> <FontAwesomeIcon icon={faBell} />Notifications</a></li>
                    <li><a href="/"><FontAwesomeIcon icon={faPowerOff} />Logout</a></li>
                </ul>
            </div>

        </nav>
    </header>
)

export default toolbar
