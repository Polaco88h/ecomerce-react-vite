import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginTop: "10px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Inicio
      </Link>
      <Link to="/carrito">Carrito</Link>
      <Link to="contacto">Contacto</Link>
      <Link to="/Admin">Admin</Link>
    </nav>
  );
}

export default NavBar;
