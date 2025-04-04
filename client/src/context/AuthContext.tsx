// src/context/AuthContext.tsx

import React, { createContext, useContext, useState, ReactNode } from 'react';

type AuthContextType = {
user: string | null;
login: (username: string) => void;
logout: () => void;
};

// Create the context
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// AuthProvider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
const [user, setUser] = useState<string | null>(null);

const login = (username: string) => setUser(username);
const logout = () => setUser(null);

return (
    <AuthContext.Provider value={{ user, login, logout }}>
    {children}
    </AuthContext.Provider>
);
};

export const useAuth = () => {
const context = useContext(AuthContext);
if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
}
return context;
};
