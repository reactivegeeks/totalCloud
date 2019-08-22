import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Description from "./Description";

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.handleNewPassword = this.handleNewPassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
  }

  handleNewPassword(e) {

  }

  handleSubmit(e) {

  }

  handleConfirmPassword(e) {

  }

  render() { 
    return ( 
      <div className="container login">
        <div className="row">
          <div className="col-md-6">
            <Description />
          </div>
          <div className="col-md-5 offset-md-1">
            <div className="row login-form">
              <form onSubmit={ this.handleSubmit }>
                <div className="form-row title-row">
                  <h3>Reset Password</h3>
                </div>
                <div className="form-row my-3">
                  <input
                    type="password"
                    className="form-control context-input"
                    placeholder="Enter New Password"
                    value={ this.state.email }
                    onChange={this.handleEmailChange}
                  />
                </div>
                <div className="form-row my-3">
                  <input
                    type="password"
                    className="form-control context-input"
                    placeholder="Confirm New Password"
                    value={ this.state.password }
                    onChange={this.handlePasswordChange}
                  />
                </div>
                <div className="form-row mb-5">
                  <button type="submit" className="btn btn-primary mb-2 login-button">reset password</button>
                </div>
                <div className="form-row mb-3">
                  <h5>Go back to login page.</h5>
                </div>
                <div className="form-row register-form">
                  <Link to="/Login" className="register-link">
                    <button type="button" className="btn btn-primary mb-2 register-button">Login</button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default Reset;