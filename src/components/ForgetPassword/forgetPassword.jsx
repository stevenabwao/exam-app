import React from "react";
import Header from '../login/Header/Toolbar'

import './forgetpassword.css'
class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
      <div className='root1'>
      <div className="base-container1" ref={this.props.containerRef}>
        <div className="header1">Enter email for reset</div>
        <div className="content1">
          <div className="form1">
           
            <div className="form-group1">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn btn-primary">
            Reset Password
          </button>
        </div>
      </div>
      </div>
      </div>
    );
  }
}
export default ForgetPassword