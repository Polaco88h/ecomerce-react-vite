import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav style={{ marginTop: "10px" }}>
      <Link to="/" style={{ marginRight: "10px" }}>
        Inicio
      </Link>
      <Link to="/carrito">Carrito</Link>
    </nav>
  );
}

export default NavBar;
