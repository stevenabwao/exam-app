import React from "react";


import './forgetpassword.scss'
class ForgetPassword extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
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
          <button type="button" className="btn">
            Reset Password
          </button>
        </div>
      </div>
    );
  }
}
export default ForgetPassword