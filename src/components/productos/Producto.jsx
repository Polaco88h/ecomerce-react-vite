import { Link } from "react-router-dom";

function Producto({ producto, agregarAlCarrito }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <img src={producto.image} alt={producto.title} width="100" />
      <h4>{producto.title}</h4>
      <p>{producto.price}</p>
      <button onClick={() => agregarAlCarrito(producto)}>
        Agregar al Carrito
      </button>
      <br />
      <Link to={`/detalle/${producto.id}`}>Ver detalle</Link>
    </div>
  );
}
export default Producto;
