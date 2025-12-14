import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";
import NavBar from "./NavBar";

function Header() {

 const {usuario,logout} = useAuthContext();
 const estaLogueado = !!usuario;

  return (
    <header
      style={{
        backgroundColor: "#2ecc71", // verde más moderno
        color: "white",
        padding: "15px 30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        borderRadius: "0 0 10px 10px",
      }}
    >
      <h1
        style={{
          margin: "0 0 10px 0",
          fontSize: "2rem",
          fontFamily: "'Arial', sans-serif",
        }}
      >
        eCommerce
      </h1>
      <NavBar />

      {estaLogueado ? <button onClick={logout}>Cerrar Sesion</button>: 
      <Link to={"/login"}>
        <button>Ingresa</button>
      </Link>}
    </header>
  );
}

export default Header;
