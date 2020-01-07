import React from "react";

import "./style.scss"
class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          <button type="button" className="btn-primary">
            Login
          </button>
        </div>
      </div>
      </div>
    );
  }
}

export default Login;