import { Routes, Route } from "react-router-dom";
import Error404 from "./components/pages/Error404";
import Inicio from "./components/pages/Inicio";
import Layout from "./components/layout/layout";
import DetalleProducto from "./components/productos/DetalleProducto";
import CarritoPage from "./components/pages/CarritoPages";
import Contacto from "./components/Contacto";
import Admin from "./components/Admin";
import RutaProtegida from "./components/RutaProtegida";
import Login from "./components/Login";
//import Header from "./components/layout/Header";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/producto/:id" element={<DetalleProducto />} />
        <Route
          path="/carrito"
          element={
            <RutaProtegida>
              <CarritoPage />
            </RutaProtegida>
          }/>
        <Route path="/Contacto" element={<Contacto />} />
        <Route
          path="/Admin"
          element={
            <RutaProtegida>
              <Admin />
            </RutaProtegida>
          }/>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Layout>
  );
}

export default App;
