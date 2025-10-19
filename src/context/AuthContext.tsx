import React, { createContext, ReactNode, useContext, useState } from 'react'

interface AuthContextType {
    user: any;
    login:(data: any) => void;
    logout:() => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined); 
export const AuthProvider = ({children}: {children: ReactNode}) => {

    const [user, setUser] = useState<any>(JSON.parse(localStorage.getItem("user") || "null"));

    const login = (data:any) => {
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);
        setUser(data.user);
    };

    const logout = () =>{
        localStorage.clear();
        setUser(null);
    };


    return <AuthContext.Provider value={{user, login, logout}}>{children}</AuthContext.Provider>;
};


export const useAuth = () => {
    const context = useContext(AuthContext);

    if(!context) throw new Error("useAuth must be used inside AuthProvider");
    return context;
};