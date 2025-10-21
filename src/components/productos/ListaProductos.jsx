import { useEffect, useState } from "react";
import Producto from "./producto";

function ListaProductos({agregarAlCarrito}){
    const [productos,setProductos] = useState([]);
    const [cargando,setCargando] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((data)=> {
            setProductos(data);
            setCargando(false);
        })
        .catch(()=> {
            setError("Error al cargar productos");
            setCargando(false);
        });
    },[]);

    if(cargando) return <p>Cargando Productos</p>;
    if (error) return <p>{error}</p>

    return(
        <div>
            <h2>Productos</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
                {productos.map((p) => (
                    <Producto key={p.id} producto={p} agregarAlCarrito={agregarAlCarrito}/>
                ))}
            </div>
        </div>
    )
}
export default ListaProductos;