
import { Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Layout from "./components/layout/Layout";
import DetalleProducto from "./components/productos/DetalleProducto";
import CarritoPage from "./components/pages/CarritoPages";
import Contacto from "./components/Contacto";
import Admin from "./components/Admin";

function App() {
 

  return (
    <Layout>
      <Routes>
        <Route
          path="/"
          element={
            <Inicio
              //agregarAlCarrito={agregarAlCarrito}
              //carrito={carrito}
              //eliminarDelCarrito={eliminarDelCarrito}
            />
          }
        />
        <Route
          path="/producto/:id"
          element={<DetalleProducto  />}
        />
        <Route
          path="/carrito"
          element={
            <CarritoPage
              
             
            />
          }
        />
        <Route path="/Contacto" element={<Contacto/>}/>
        
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
