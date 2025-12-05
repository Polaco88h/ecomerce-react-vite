import { useContext } from "react";
import { CarritoContext } from "../../Context/CarritoContext";


function Carrito() {
  const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
  return (
    <div>
      <h2>Carrito</h2>
      {carrito.length === 0 ? (
      <p style={{ color: "#aaa", fontStyle: "italic" }}>
         No hay productos en el carrito.
       </p>
       ) : (
       <ul style={{ listStyle: "none", padding: 0 }}>
         {carrito.map((p,index) => (
           // EL ERROR ESTABA AQUÍ: Los atributos ahora están DENTRO de la etiqueta <li>
           <li
             key={index} 
             style={{
               display: "flex",
               justifyContent: "space-between",
               alignItems: "center",
               marginBottom: "10px",
               padding: "10px",
               borderBottom: "1px solid #333",
             }}
           >
              {/* AQUI DEBES AGREGAR EL CONTENIDO QUE QUIERES MOSTRAR, 
                  por ejemplo: la imagen, el nombre y el botón de eliminar */}
                  <img src={p.image} alt={p.title} height={80} width={80} />
              <span>{p.title}</span>
              <button onClick={() => eliminarDelCarrito(index)}>AEliminar</button>

           </li>
           ) // <-- Este paréntesis cierra el map
            // Ya no necesitas el </ul> o ) extras aquí.
            )} 
       </ul> 
      )} 
    </div>
  ); // <-- Cierre correcto del return y de la función
}

      
      
          
          


// style={{
//   display: "flex",
//   flexDirection: "column",
//    alignItems: "center",
//   justifyContent: "center",
//   minHeight: "70vh",
//   padding: "20px",
// }}
// >
//   <h2 style={{ color: "#fff", marginBottom: "20px" }}> Mi carrito</h2>

//   <div
//     style={{
//       backgroundColor: "#1e1e1e",
//       borderRadius: "12px",
//       padding: "20px",
//       width: "90%",
//       maxWidth: "600px",
//       boxShadow: "0 0 10px rgba(0, 255, 100, 0.2)",
//     }}
//   >
//     {carrito.length === 0 ? (
//       <p style={{ color: "#aaa", fontStyle: "italic" }}>
//         No hay productos en el carrito.
//       </p>
//     ) : (
//       <ul style={{ listStyle: "none", padding: 0 }}>
//         {carrito.map((p) => (
//           <li
//             key={p.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginBottom: "10px",
//               padding: "10px",
//               borderBottom: "1px solid #333",
//             }}
//           >
//             <span style={{ color: "#fff" }}>
//               {p.title} - ${p.price}
//             </span>
//             <button
//               onClick={() => eliminarDelCarrito(p.id)}
//               style={{
//                 backgroundColor: "#22c55e",
//                 border: "none",
//                 padding: "6px 12px",
//                 borderRadius: "8px",
//                 color: "#fff",
//                 cursor: "pointer",
//               }}
//             >
//               Eliminar
//             </button>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>

export default Carrito;
