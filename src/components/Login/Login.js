import React from 'react';
import "./login.css"

class Login extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }
render(){
  return (
    <div className="root-container">
      
     
        <div className="box-container">
        {this.state.isLoginOpen && <LoginBox/>}
      {this.state.isRegisterOpen && <RegisterBox/>}
         <div className="contoller">Login

         </div>
         <div className="contoller">
              Register
         </div>

        </div>
       
      
  </div>
  )
}
  
}
class LoginBox extends React.Component {
  constructor(props){
    super(props)
      this.state ={}
  }
  submitLogin =(e)=>{

  }
render(){
  return (
    <div className="inner-container">

      <div className="header">
        ENTER CREDENTIALS
      </div>
      <div className = "box">
        <div className = "input-group">
          <label htmlFor="Username">Username</label>
          <input type="text" name="Username" placeholder="Username" className="login-input"/>
        </div>
        <div className = "input-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" className="login-input" />
        </div>
        <label htmlFor="forgetpassword">Forgetpassword</label>
        <button type="btn" className="login-btn btn-primary" onClick = 
        {this.submitLogin.bind(this)}>Login</button>
      </div>
    </div>
  )
}
}class RegisterBox extends React.Component {
  constructor(props){
    super(props)
      this.state ={}
  }
  submitRegister =(e)=>{
    
  }
render(){
  return (
    <div className="inner-container">

       <div className="header">
        ENTER DETAILS TO REGISTER
      </div>
      <div className = "box">

        <div className = "input-group">
          <label htmlFor="Username">Username</label>
          <input type="text" name="Username" placeholder="Username" className="login-input"/>
        </div>

        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" className="login-input" placeholder="Email"/>
          </div>

        <div className = "input-group">
          <label htmlFor="password">Password</label>
          <input type="text" name="password" placeholder="password" className="login-input" />
        </div>

        <div className = "input-group">
          <label htmlFor="password">Confirm Password</label>
          <input type="text" name="password" placeholder="password" className="login-input" />
        </div>

        <button type="btn" className="login-btn btn-primary" onClick =
         {this.submitRegister.bind(this)}>
          Register</button>
      </div>
    </div>
  )
}
}


export default Login
