import React from 'react';

function Producto({ producto, setProducto, eliminarProducto }) {
  const handleEliminar = () => {
    const respuesta = window.confirm('¿Desea eliminar el producto?');

    if (respuesta) {
      eliminarProducto(producto);
    }
  };

  return (
    <div className="bg-white px-5 py-5 rounded-xl shadow-xl mt-2 border-4 ml-5 mr-6">
      <p className="font-bold text-gray-700 block">
        Nombre: <span className="font-normal">{producto.nombre}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Descripción: <span className="font-normal">{producto.descripcion}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Precio: <span className="font-normal">{producto.precio}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Cantidad: <span className="font-normal">{producto.cantidad}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Proveedor: <span className="font-normal">{producto.proveedor}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Código: <span className="font-normal">{producto.codigo}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Stock: <span className="font-normal">{producto.stock}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Categoría: <span className="font-normal">{producto.categoria}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Clave: <span className="font-normal">{producto.clave}</span>
      </p>
      <p className="font-bold text-gray-700 block">
        Condición: <span className="font-normal">{producto.condicion}</span>
      </p>

      <div className="mb-5 font-bold text-gray-700">
          Imagen del Producto:
          <img
            className="h-[250px] w-[250px] border border-white mx-auto "
            src={producto.image}
            alt=""
          />
      </div>
      
      <div>
        <button
          type="button"
          className="px-10 py-2 bg-green-400 hover:bg-green-700 text-white rounded-xl mt-2 mx-3"
          onClick={() => setProducto(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="px-10 py-2 bg-red-500 hover:bg-red-800 text-white rounded-xl"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
        
      </div>
    </div>
  );
}

export default Producto;
