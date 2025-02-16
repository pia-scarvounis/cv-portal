import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext"; // ✅ Importer AuthContext

function LoginForm() {
    const { login } = useContext(AuthContext); // ✅ Bruker login-funksjonen fra AuthContext
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        login({ email }); // ✅ Setter brukeren i AuthContext
        navigate("/home"); // 📌 Sender brukeren til hjem-siden
    };

    return (
        <div>
            <h2>Logg inn</h2>
            <form onSubmit={handleLogin}>
                <label>E-post:</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <label>Passord:</label>
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />

                <button type="submit">Logg inn</button>
            </form>
        </div>
    );
}

export default LoginForm;


