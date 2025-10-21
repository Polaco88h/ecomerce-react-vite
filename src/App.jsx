import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/inicio";
import Layout from "./components/layout/Layout";
import DetalleProducto from "./components/productos/DetalleProducto";
import CarritoPage from "./components/pages/CarritoPages";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter((p) => p.id !== id));
  };

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              agregarAlCarrito={agregarAlCarrito}
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />
        <Route
          path="/detalle/:id"
          element={<DetalleProducto agregarAlCarrito={agregarAlCarrito} />}
        />
        <Route
          path="/carrito"
          element={
            <CarritoPage
              carrito={carrito}
              eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
