import React, { Component } from "react";
import API from "../../utils/API";
import "./Signup.css"


class Signup extends Component {

    // toDO
    // change state to display and close modal.


    state = {
        name: "",
        email: "",
        emailVerify: "",
        password: "",
        passwordVerify: "",
        modalview: false,
    };

    // modalState = event => {
    //     const modalState = false;
    //     if(modalState === false){function(){

    //     }}
    // }

    handleInputChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        console.log("Sign Up form submitted");
        console.log("name: " + this.state.name);
        console.log("email: " + this.state.email);
        console.log("emailV: " + this.state.emailVerify);
        console.log("password: " + this.state.password);
        console.log("passwordV: " + this.state.passwordVerify);

        API.createUser({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }).then(
            this.setState({
                name: "",
                email: "",
                emailVerify: "",
                password: "",
                passwordVerify: "",
            }))
            .catch(err => console.log(err))

    };
    render() {
        return (
            <div id="signupModal" className="modal ">
                <div className="modal-background "></div>
                <div id="modal1" className="modal-content has-background-white-ter">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Sign Up</p>
                    </header>
                    <div className="field">
                        <label className="label ">Name</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="Jane Doe"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user"></i>
                            </span>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="email"
                                placeholder="Weight@TargetRep.com"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>

                        </div>
                        <p className="help">We will never release your email without permission.</p>
                    </div>
                    <div className="field">
                        <label className="label ">Verify Email</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="email"
                                placeholder="Weight@TargetRep.com"
                                name="emailVerify"
                                value={this.state.emailVerify}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                        </div>
                    </div>
                    <div className="field">
                        <label className="label">Password</label>
                        <div className="control  has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="******"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>

                        </div>
                        <p className="help">Must be at least 6 characters long.</p>
                    </div>
                    <div className="field">
                        <label className="label ">Verify password</label>
                        <div className="control has-icons-left">
                            <input
                                className="input"
                                type="text"
                                placeholder="******"
                                name="passwordVerify"
                                value={this.state.passwordVerify}
                                onChange={this.handleInputChange}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="control">
                    <button id="submitButton" className="button is-primary" onClick={this.handleFormSubmit} value="submit" >Submit</button>
                </div>
                <button id="closeModalButton" className="modal-close is-large" aria-label="close"></button>
            </div>

        );
    };
}

export default Signup;