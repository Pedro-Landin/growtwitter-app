import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";
import type { AuthUser } from "../types/auth";

interface AuthContextData {
    user: AuthUser | null;
    isAuthenticated: boolean;
    loading: boolean;
    signIn: (userData: AuthUser, token: string) => void;
    signOut: () => void;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext<AuthContextData| undefined>(undefined);

export function AuthProviderComponent({ children }: AuthContextProviderProps) {
    const [user, setUser] = useState<AuthUser | null>(null);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const storedUser = localStorage.getItem("@GrowTwitter:user");
        const storedToken = localStorage.getItem("@GrowTwitter:token");

        if (storedUser && storedToken) {
            setUser(JSON.parse(storedUser));
        }
        
        setLoading(false); 
    }, []);

    function signIn(userData: AuthUser, token: string) {
        setUser(userData);

        localStorage.setItem("@GrowTwitter:token", token);
        localStorage.setItem("@GrowTwitter:user", JSON.stringify(userData));
    }

    function signOut() {
        setUser(null);
        localStorage.clear();
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

