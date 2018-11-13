import React from "react";
import "./Navbar.css"

const Navbar = props => (

    <nav className="sidebar-sticky">
        <ul className="nav flex-column">
            
            <li className="nav-item btn btn-outline-dark">
                <a
                    onClick={() => props.handlePageChange("Logs")}
                    className={
                        props.currentPage === "Logs" ? "nav-link active" : "nav-link"
                    }
                >
                    Logs
                </a>
            </li>
            <li className="nav-item btn btn-outline-dark">
                <a
                    onClick={() => props.handlePageChange("Courses")}
                    className={
                        props.currentPage === "Courses" ? "nav-link active" : "nav-link"
                    }
                >
                Courses
                </a>
                </li>
            <li className="nav-item btn btn-outline-dark">
                <a
                    onClick={() => props.handlePageChange("Stats")}
                    className={
                        props.currentPage === "Stats" ? "nav-link active" : "nav-link"
                    }
                >
                Stats
                </a>
            </li>
            <li className="nav-item btn btn-outline-dark">
                <a
                    onClick={() => props.handlePageChange("Videos")}
                    className={
                        props.currentPage === "Videos" ? "nav-link active" : "nav-link"
                    }
                >
                Videos
                </a>
            </li>
            <br/>
            <li className="nav-item btn">
                <a className="day button is-primary">White</a>
                <a className="night button is-dark">Dark</a>
            </li>
        </ul>
    </nav>

);

export default Navbar;