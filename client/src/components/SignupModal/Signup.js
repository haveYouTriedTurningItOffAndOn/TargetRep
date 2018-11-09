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
                password: "",
                passwordVerify: "",
            }))
            .catch(err => console.log(err))

    };
    render() {
        return (
            <div className="modal fade" id="signUpModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" >Sign Up</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="userName"
                                        placeholder="Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="emailOne"
                                        aria-describedby="emailHelp"
                                        placeholder="FreeWeight@targetrep.com"
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleInputChange}
                                    />
                                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleInputChange}

                                    />
                                </div>
                                <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        name="passwordVerify"
                                        value={this.state.passwordVerify}
                                        onChange={this.handleInputChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={this.handleFormSubmit} data-dismiss="modal">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    };
}

export default Signup;