import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
                    Search
        </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/SavedBooks"
                    className={window.location.pathname === "/SavedBooks" ? "nav-link active" : "nav-link"}
                >
                    Saved
        </Link>
            </li>
        </ul>
    );
}

export default NavTabs;
