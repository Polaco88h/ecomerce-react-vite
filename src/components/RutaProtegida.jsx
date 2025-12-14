import { useContext } from "react";
import {AuthContext} from "../Context/AuthContext.jsx"
import { Navigate } from "react-router-dom";


const RutaProtegida = ({children}) => {

    const {usuario} = useContext(AuthContext);
    console.log("Estado del usuario en RutaProtegida:", usuario);

    if(!usuario)
        return <Navigate to="/login" replace/>;

return children;
}

export default RutaProtegida;