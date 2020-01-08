import React from "react";
import {Link} from "react-router-dom"
import ExamApp from '../ExamApp'
import Header from './Header/Toolbar'



class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
     <div>
       <Header />
   
      <div className = "root">
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">ENTER CREDENTIALS</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <Link to='/home'>
          <button type="button" className="btn-primary" onClick={ExamApp}>
            Login
          </button>
          </Link>
        </div>
      </div>
      </div>
      </div> 
    );
  }
}

export default Login;