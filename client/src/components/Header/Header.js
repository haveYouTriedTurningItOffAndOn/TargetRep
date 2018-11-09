import React, { Component } from "react";

class Header extends Component {



    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar">
                <a className="navbar-brand" href="#">
                    <img src="/images/benchPressIcon.png" alt=""></img>
                    Target Rep
                </a>
                <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-secondary" data-toggle="modal"  data-target="#signUpModal">Sign-up</button>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="nav-link btn btn-primary" data-toggle="modal"  data-target="#loginModal">Login</button>
                    </li>
                    
                </ul>

            </nav>
        );
    };

}


export default Header;