import React from 'react';
import Toolbar from './Toolbar/Toolbar'
import SideDrawer from './SideDrawer/SideDrawer'
import Results from './Tables/resulttable'



import './ExamApp.css'
import Graph from './charts/splineChart';
import Table from './Tables/Table';

class ExamApp extends React.Component{
    state ={
        sideDrawerOpen:false
    };

    drawerToggleClickHandler = (e) =>{
        this.setState =((prevState) =>
        {
            return {sideDrawerOpen:!prevState.sideDrawerOpen}
        })
    }
  
    render() {
        let sideDrawer;
        
        if(this.props.sideDrawerOpen){
            sideDrawer= <SideDrawer/>
        
        }
        
        return (
            <div className='roo' style={{ height:'100%', background:'rgb(243, 216, 243)'}}>
                 <div className='heading'>
        <h2>K.C.S.E RESULT ANALYSIS</h2>
		</div>
            
            <div>
                <Toolbar drawerHandler={this.drawerToggleClickHandler} />
                {SideDrawer}
                
            </div>

            <div className="root4">
            <div className="mean-graph"> 
                <Graph />
                </div>
                <div className= "mean-table">
                <Table />
            </div>
            </div>
            </div>
        )
    }
}
export default ExamApp;