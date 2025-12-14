import { Link } from "react-router-dom";
import { useAuthContext } from "../../Context/AuthContext";

function NavBar() {
  const { usuario } = useAuthContext();
  const esAdmin = usuario === "admin";

  return (
    <nav style={{ marginTop: "10px" }}>
      <ul>
        <li>
          <Link to="/" style={{ marginRight: "10px" }}>
            Inicio
          </Link>
          <Link to="/carrito">Carrito</Link>
          <Link to="/contacto">Contacto</Link>
          {esAdmin && <Link to="/Admin">Admin</Link>}
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
