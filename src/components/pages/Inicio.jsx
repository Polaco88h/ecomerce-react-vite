import ListaProductos from "../productos/ListaProductos";
import Carrito from "../carrito/carrito";

function Inicio({ carrito, agregarAlCarrito, eliminarDelCarrito }) {
  return (
    <>
      <ListaProductos agregarAlCarrito={agregarAlCarrito} />
      <Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
    </>
  );
}

export default Inicio;
