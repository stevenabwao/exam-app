import React from "react";
import Header from '../login/Header/Toolbar'

import './style.scss'
import './register.css'

class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      <div className = "root2">
      <div className="base-container2" ref={this.props.containerRef}>
        <div className="header2">Register</div>
        <div className="content2">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input type="password" name="password" placeholder="password" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-primary">
            Register
          </button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Register