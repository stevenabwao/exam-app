import React from 'react';
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Backdrop from './Backdrop/backdrop'

class ExamApp extends React.Component{
    state ={
        sideDrawerOpen:false
    };

    drawerToggleClickHandler = () =>{
        this.setState =((prevState) =>
        {
            return {sideDrawerOpen:!prevState.sideDrawerOpen}
        })
    }
  
    render() {
        let sideDrawer;
        let backdrop;
        if(this.state.sideDrawerOpen){
            sideDrawer= <SideDrawer/>
            backdrop =<Backdrop />
        }
        
        return (
            <div>
                <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
                {sideDrawer}
                {backdrop}
            </div>
        )
    }
}
export default ExamApp;