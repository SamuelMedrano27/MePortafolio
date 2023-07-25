import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ productos, setProductos, producto, setProducto }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [codigo, setCodigo] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [image, setImage] = useState("null");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(producto).length > 0) {
      setNombre(producto.nombre);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio);
      setCodigo(producto.codigo);
      setStock(producto.stock);
      setCategoria(producto.categoria);
      setImage(producto.image);
    }
  }, [producto]);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    if (
      [
        nombre,
        descripcion,
        precio,
        codigo,
        stock,
        categoria,
        image,
      ].includes('')
    ) {
      setError(true);
      return;
    }

    const nuevoProducto = {
      nombre,
      descripcion,
      precio,
      codigo,
      stock,
      categoria,
      image,
    };

    if (producto.id) {
      //MODO EDITAR
      nuevoProducto.id = producto.id;
      const productosActualizados = productos.map((productoState) =>
        productoState.id === producto.id ? nuevoProducto : productoState
      );
      setProductos(productosActualizados);
      setProducto({});

      const res = await fetch("../api/product", {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      });

      const data = await res.json();
      if (data) {
        console.log("enviado");
      } else {
        console.log("error");
      }
    } else {
      //MODO AGREGAR
      nuevoProducto.id = generarId();
      setProductos([...productos, nuevoProducto]);

      const res = await fetch("../api/product", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(nuevoProducto),
      });

      const data = await res.json();

      if (data) {
        console.log("enviado");
      } else {
        console.log("error");
      }
    }

    setNombre('');
    setDescripcion('');
    setPrecio('');
    setCodigo('');
    setStock('');
    setCategoria('');
    setImage(null);
    setError(false);
  };

  const generarId = () => {
    const date = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2);
    return date + aleatorio;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = function (event) {
      setImage(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full">
      <h2 className='font-black text-2xl text-center'>Formulario de Productos</h2>
      <p className='font-bold text-center text-white'>Ingreso de Datos</p>
      <form
        className='bg-gradient-to-br from-red-600 via-red-500 to-red-400 border-4 px-5 py-5 rounded-xl shadow-xl mt-2 border-white '
        onSubmit={handlerSubmit}
      >
        
        <div className="mb-3">
          <label htmlFor="nombre" className='font-bold text-gray-100 block'>
            Nombre del producto:
          </label>
          <input
            id="nombre"
            type="text"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Nombre del producto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="descripcion" className='font-bold text-gray-100 block'>
            Descripción del producto:
          </label>
          <textarea
            id="descripcion"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Descripción del producto"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="precio" className='font-bold text-gray-100 block'>
            Precio del producto:
          </label>
          <input
            id="precio"
            type="number"
            step="0.01"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Precio del producto"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
       
        
        <div className="mb-3">
          <label htmlFor="codigo" className='font-bold text-gray-100 block'>
            Código del producto:
          </label>
          <input
            id="codigo"
            type="text"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Código del producto"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="stock" className='font-bold text-gray-100 block'>
            Stock del producto:
          </label>
          <input
            id="stock"
            type="number"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Stock del producto"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="categoria" className='font-bold text-gray-100 block'>
            Categoría del producto:
          </label>
          <select
            id="categoria"
            className="w-full border-2 p-2 rounded-lg"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Aro">Aro</option>
            <option value="Llanta">Llanta</option>
            <option value="Asiento">Asiento</option>
          </select>
        </div>

        

        
        
        <div className="mb-3">
          <label
            htmlFor="image"
            className='font-bold text-gray-100 block'
          >
            Imagen de Producto:
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            className="w-full border-2 p-2 rounded-lg"
            onChange={handleImageUpload}
          />
        </div>

        <div className="block col-start-2">
          <br />
          <input
            type="submit"
            value={producto.id ? 'Guardar Producto' : 'Agregar Producto'}
            className='px-10 py-2 bg-green-500 border-2 border-white hover:bg-green-700 text-white rounded-xl'
          />
        </div>
        {error && <Error texto="Todos los campos son obligatorios" />}
      </form>
    </div>
  );
};

export default Formulario;
