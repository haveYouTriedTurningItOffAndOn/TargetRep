import React from "react";


const Navbar = props => (

    <nav className="sidebar-sticky">
        <ul className="nav flex-column">
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Home")}
                    className={
                        props.currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Logs")}
                    className={
                        props.currentPage === "Logs" ? "nav-link active" : "nav-link"
                    }
                >
                    Logs
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Courses")}
                    className={
                        props.currentPage === "Courses" ? "nav-link active" : "nav-link"
                    }
                >
                Courses
                </a>
                </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Stats")}
                    className={
                        props.currentPage === "Stats" ? "nav-link active" : "nav-link"
                    }
                >
                Stats
                </a>
            </li>
            <li className="nav-item">
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
            <li className="nav-item">
                <a className="day button is-primary">White</a>
                <a className="night button is-dark">Dark</a>
            </li>
        </ul>
    </nav>

);

export default Navbar;