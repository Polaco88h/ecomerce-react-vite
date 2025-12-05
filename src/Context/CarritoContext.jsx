import { Children, createContext, useState } from "react";

//Creamos el contexto
export const CarritoContext = createContext();
//Proveemos el contexto
export function CarritoProvider({ children }) {

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  //carrito.filter((_,indice) => indice != indiceAEliminar)

   const eliminarDelCarrito = (id) => {
    console.log("hola")
    setCarrito(carrito.filter((_,index) => index !== id));
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarAlCarrito, eliminarDelCarrito , vaciarCarrito }}
    >
      {children}
    </CarritoContext.Provider>
  );
}
