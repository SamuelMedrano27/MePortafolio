import React from "react";
import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ productos, setProductos, producto, setProducto }) => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [proveedor, setProveedor] = useState('');
  const [codigo, setCodigo] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [clave, setClave] = useState('');
  const [condicion, setCondicion] = useState('');
  const [image, setImage] = useState("null");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(producto).length > 0) {
      setNombre(producto.nombre);
      setDescripcion(producto.descripcion);
      setPrecio(producto.precio);
      setCantidad(producto.cantidad);
      setProveedor(producto.proveedor);
      setCodigo(producto.codigo);
      setStock(producto.stock);
      setCategoria(producto.categoria);
      setClave(producto.clave);
      setCondicion(producto.condicion);
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
        cantidad,
        proveedor,
        codigo,
        stock,
        categoria,
        clave,
        condicion,
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
      cantidad,
      proveedor,
      codigo,
      stock,
      categoria,
      clave,
      condicion,
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
    setCantidad('');
    setProveedor('');
    setCodigo('');
    setStock('');
    setCategoria('');
    setClave('');
    setCondicion('');
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
      <form
        className="bg-orange-200 border-2 border-white backdrop-blur-md px-5 py-8-3xl rounded-3xl p-5 grid grid-cols-2 gap-4"
        onSubmit={handlerSubmit}
      >
        
        <div className="mb-3">
          <label htmlFor="nombre" className="font-bold text-gray-700 block">
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
          <label htmlFor="descripcion" className="font-bold text-gray-700 block">
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
          <label htmlFor="precio" className="font-bold text-gray-700 block">
            Precio del producto:
          </label>
          <input
            id="precio"
            type="text"
            step="0.01"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Precio del producto"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cantidad" className="font-bold text-gray-700 block">
            Cantidad disponible:
          </label>
          <input
            id="cantidad"
            type="number"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Cantidad disponible"
            value={cantidad}
            onChange={(e) => setCantidad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="proveedor" className="font-bold text-gray-700 block">
            Proveedor del producto:
          </label>
          <input
            id="proveedor"
            type="text"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Proveedor del producto"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="codigo" className="font-bold text-gray-700 block">
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
          <label htmlFor="stock" className="font-bold text-gray-700 block">
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
          <label htmlFor="categoria" className="font-bold text-gray-700 block">
            Categoría del producto:
          </label>
          <select
            id="categoria"
            className="w-full border-2 p-2 rounded-lg"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">Seleccionar categoría</option>
            <option value="Herramienta">Herramienta</option>
            <option value="Dispositivo">Dispositivo</option>
            <option value="Periféricos">Periféricos</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="clave" className="font-bold text-gray-700 block">
            Clave del producto:
          </label>
          <input
            id="clave"
            type="text"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            placeholder="Clave del producto"
            value={clave}
            onChange={(e) => setClave(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="condicion" className="font-bold text-gray-700 block">
            Condición del producto:
          </label>
          <select
            id="condicion"
            className="w-full border-2 p-2 rounded-lg placeholder-black"
            value={condicion}
            onChange={(e) => setCondicion(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="Nuevo">Nuevo</option>
            <option value="Seminuevo">Seminuevo</option>
            <option value="Usado">Usado</option>
          </select>
        </div>
        
        <div className="mb-3">
          <label
            htmlFor="image"
            className="font-bold text-gray-700 block"
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
            className="bg-yellow-600 p-3 mx-auto w-full text-white hover:bg-yellow-800 transition-colors rounded-xl"
          />
        </div>
        {error && <Error texto="Todos los campos son obligatorios" />}
      </form>
    </div>
  );
};

export default Formulario;
