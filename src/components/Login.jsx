import { useState ,useContext} from "react";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {

    const [usuario, setUsuario] = useState("");
    const [contrasenia, setContrasenia] = useState("");

    const {login} = useContext(AuthContext);
    const navigate = useNavigate();

    const manejarSubmit = (evento) =>  {
        evento.preventDefault();
        //simulamos la autenticacion
        if(usuario === "admin"|| usuario === "ADMIN" && contrasenia == "1234"){
            login(usuario);
            navigate("/");
        } else {
            alert("usuario o contreña invalida");
        }
    }

    return(
        <> 
        <form onSubmit={manejarSubmit}>
            <h3>Iniciar secion</h3>
            <label htmlFor="">Usuario</label>
            <input type="text"
            value={usuario}
            onChange={(evento) => setUsuario(evento.target.value)}
            />
            <label htmlFor="">Contraseña</label>
            <input type="text"
            value={contrasenia}
            onChange={(evento) => setContrasenia(evento.target.value)}
            />
            <button type="submit">Iniciar Secion</button>
            </form>
        </>
    );
}
export default Login;