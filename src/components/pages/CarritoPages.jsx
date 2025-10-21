import Carrito from "../carrito/carrito";

function CarritoPage({ carrito, eliminarDelCarrito }) {
  return (
    <div>
      <h2>Mi Carrito</h2>
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </div>
  );
}

export default CarritoPage;
