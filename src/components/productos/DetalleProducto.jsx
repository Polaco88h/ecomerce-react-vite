import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function DetalleProducto() {
  const { id } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch(() => {
        setError("Error al cargar el producto");
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <p>Cargando producto...</p>;
  if (error) return <p>{error}</p>;
  if (!producto) return null;

  return (
    <div>
      <h2>Detalle del producto n: {id}</h2>
      <img src={producto.image} alt={producto.title} width="200" />
      <h2>{producto.title}</h2>
      <p>{producto.description}</p>
      <p>Precio: ${producto.price}</p>
    </div>
  );
}
