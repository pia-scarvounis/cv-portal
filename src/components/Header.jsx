import React from "react";
import { Link } from "react-router-dom"; 

function Header() {
    return (
        <header>
            <h1>CV-Portal</h1>
            <nav>
                <ul>
                    <li><Link to="/">Hjem</Link></li>
                    <li><Link to="/my-cv">Min CV</Link></li>
                    <li><Link to="/login">Logg inn</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;



