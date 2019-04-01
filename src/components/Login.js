import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Login extends Component {
    
    render() {
        return (
            <div className="row row-narrow">
                <form action="">
                    <div className="form-item">
                        <label htmlFor="email">Enter email</label>
                        <input type="email" className="form-input" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Enter password</label>
                        <input type="password"className="form-input" name="password" placeholder="Enter password" />
                    </div>
                    <div className="form-item">
                        <button className="button button-green" onClick={this.onSubmit}>Login</button>
                    </div>
                    <p className="signup">New to us? <NavLink to="/signup" id="link">Signup</NavLink></p>
                </form>
            </div>
        );
    }
}

export default Login;