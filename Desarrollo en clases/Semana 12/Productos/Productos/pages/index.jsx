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
    <div className="mx-auto pt-10 px-10 bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 min-h-screen w-full">
      <Header />
      <div className="grid grid-cols-2 w-full">
        <h2 className=" font-black text-2xl text-center text-black mb-10 ">
          Formulario de Productos
        </h2>
        <h2 className=" font-black text-2xl text-center text-black mb-10 ">
          Listado de Productos
        </h2>
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
