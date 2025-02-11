import React, { createContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null); // holder på innlogget bruker
    const login = (userData) => {
        setUser(userData); // setter innlogget bruker
    };
    const logout = () => {
        setUser(null); // logger ut bruker 
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
    );
}

export default AuthContext;