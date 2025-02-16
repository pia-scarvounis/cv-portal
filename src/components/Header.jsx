import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

function Header() {
    const { user, logout } = useContext(AuthContext); // Henter brukerdata og logout-funksjon

    return (
        <header>
            <h1>CV-Portal</h1>
            <nav>
                <ul>
                    {/* 🔹 Viser "Hjem" og "Min CV" kun hvis brukeren er logget inn */}
                    {user ? (
                        <>
                            <li><Link to="/">Lag CV</Link></li>
                            <li><Link to="/my-cv">Min CV</Link></li>
                            <li><button onClick={logout}>Logg ut</button></li>
                        </>
                    ) : (
                        <li><Link to="/login">Logg inn</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;





