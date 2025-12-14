import {  createContext, useContext, useState } from "react"

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [usuario, setUsuario] = useState(null);

    const login = (nombreUsuario) => {
        //simulamos la creacion del token
        const token = `fake-token-${nombreUsuario}`;
        localStorage.setItem(`authToken`,token);
        setUsuario(nombreUsuario);
    }
    const logout = () => {
        localStorage.removeItem(`authToken`);
        setUsuario(null);
    }

    return (
        <AuthContext.Provider value={{usuario , login , logout}}>
            {children}
        </AuthContext.Provider>
    );

};
//custom hooks , hooks personalizado
export const useAuthContext = () => useContext(AuthContext)