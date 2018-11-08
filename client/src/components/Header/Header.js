import React, { Component } from "react";

class Header extends Component {



    render() {
        return (
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <div className="navbar-item">
                        <strong>Target Rep</strong>
                        <br></br>
                        <img src="/images/benchPressIcon.png" alt=""></img>
                    </div>

                    <button className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </button>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        {/* needs navbar-start and navbar end */}

                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button id="signupButton" className="button is-primary">
                                    <strong>Sign up</strong>
                                </button>
                                <button id="loginButton" className="button is-light">
                                    <strong>Log in</strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

                );
            };
        }
        
        
export default Header;