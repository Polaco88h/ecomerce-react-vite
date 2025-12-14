import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { CarritoProvider } from "./Context/CarritoContext.jsx";
import RutaProtegida from "./components/RutaProtegida.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <AuthProvider>
        <CarritoProvider>
          <App />
        </CarritoProvider>
    </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
