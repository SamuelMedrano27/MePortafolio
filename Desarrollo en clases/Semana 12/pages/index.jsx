import { Inter } from "next/font/google";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoProductos from "./components/ListadoProductos";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [productos, setProductos] = useState(null);
  const [producto, setProducto] = useState({});

  const eliminarProducto = async (productoD) => {

    const productoid = productoD.id

    const productosActualizados = productos.filter(
      (producto) => producto.id != productoid
    );
    setProductos(productosActualizados);

    const res = await fetch(`/api/product/${productoid}`, {
      method: "DELETE"
    });

    const data = await res.json();

    if (res.ok) {
      console.log(data);
    } else {
      console.log("error");
    }
  };

  const getData = async () => {
    try {
      const res = await fetch("/api/product");
      if (res.ok) {
        const dataGet = await res.json();
        setProductos(dataGet);
      } else {
        throw new Error("Error al obtener los datos del producto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!productos) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto  ">
      <Header />
      <div className="flex mt-5 ml-5">
       
        {productos && (
          <>
            <Formulario
              productos={productos}
              setProductos={setProductos}
              producto={producto}
              setProducto={setProducto}
            />

            <ListadoProductos
              productos={productos}
              setProducto={setProducto}
              eliminarProducto={eliminarProducto}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
