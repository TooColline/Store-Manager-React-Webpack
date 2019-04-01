import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class Signup extends Component {
    render() {
        return (
            <div className="row row-narrow">
                <form action="">
                    <div className="form-item">
                        <label htmlFor="username">Enter username</label>
                        <input type="text" className="form-input" name="email" placeholder="Enter username" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="email">Enter email</label>
                        <input type="email" className="form-input" name="email" placeholder="Enter email" />
                    </div>
                    <div className="form-item">
                        <label htmlFor="password">Enter password</label>
                        <input type="password"className="form-input" name="password" placeholder="Enter password" />
                    </div>
                    <div className="form-item">
                        <button className="button button-green">Signup</button>
                    </div>
                    <p className="signup">Already have an account? <NavLink to="/login" id="link">Login</NavLink></p>
                </form>
            </div>
        );
    }
}

export default Signup;