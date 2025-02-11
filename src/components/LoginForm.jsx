import React, { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function LoginForm() {
    const { login } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        // Simulert bruker (senere kan vi koble dette til backend)
        const userData = { id: 1, name: "Test Bruker", email }; 
        login(userData); // ✅ Logger inn brukeren
    };

    return (
        <div>
            <h2>Logg inn</h2>
            <form onSubmit={handleLogin}>
                <label>E-post:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Passord:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

                <button type="submit">Logg inn</button>
            </form>
        </div>
    );
}

export default LoginForm;
