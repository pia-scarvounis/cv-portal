import React, { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData); // ✅ Setter brukeren i AuthContext
    };

    const logout = () => {
        setUser(null); // ✅ Fjerner brukeren
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
