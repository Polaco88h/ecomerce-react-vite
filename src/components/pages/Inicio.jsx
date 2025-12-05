import ListaProductos from "../productos/ListaProductos";
import Carrito from "../carrito/carrito";
import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";

function Inicio() {
  const {agregarAlCarrito} = useContext(CarritoContext);
  return (
    <>
      <ListaProductos agregarAlCarrito={agregarAlCarrito} />
      
    </>
  );
}
//<Carrito carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
export default Inicio;
