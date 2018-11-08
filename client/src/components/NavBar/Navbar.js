import React from "react";


const Navbar = props => (

    <aside className="menu">

        <ul className="menu-list">
            <li>
                <a
                    onClick={() => props.handlePageChange("Home")}
                    className={
                        props.currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>
            </li>
            <li>
                <a
                    onClick={() => props.handlePageChange("Logs")}
                    className={
                        props.currentPage === "Logs" ? "nav-link active" : "nav-link"
                    }
                >
                    Logs
                </a>
            </li>
            <li>
                <a
                    onClick={() => props.handlePageChange("Courses")}
                    className={
                        props.currentPage === "Courses" ? "nav-link active" : "nav-link"
                    }
                >
                Courses
                </a>
                </li>
            <li>
                <a
                    onClick={() => props.handlePageChange("Stats")}
                    className={
                        props.currentPage === "Stats" ? "nav-link active" : "nav-link"
                    }
                >
                Stats
                </a>
            </li>
            <li>
                <a
                    onClick={() => props.handlePageChange("Videos")}
                    className={
                        props.currentPage === "Videos" ? "nav-link active" : "nav-link"
                    }
                >
                Videos
                </a>
            </li>
            <li>
                <a class="day button is-primary">White</a>
                <a class="night button is-dark">Dark</a>
            </li>
        </ul>
    </aside>

);

export default Navbar;