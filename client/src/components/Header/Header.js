import React, { Component } from "react";

class Header extends Component {



    render() {
        return (
            <nav className="navbar navbar-expand navbar-dark bg-dark flex-column flex-md-row bd-navbar">
                <a className="navbar-brand" href="#">
                    <img src="/images/benchPressIcon.png" alt=""></img>
                    Target Rep
                </a>
                <ul class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sign-up</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Login</a>
                    </li>
                    
                </ul>

            </nav>
        );
    };

}


export default Header;