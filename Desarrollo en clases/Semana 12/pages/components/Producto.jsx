import React from 'react';

function Producto({ producto, setProducto, eliminarProducto }) {
  const handleEliminar = () => {
    const respuesta = window.confirm('¿Desea eliminar el producto?');

    if (respuesta) {
      eliminarProducto(producto);
    }
  };

  return (
    <div className='bg-gradient-to-br from-indigo-700 via-indigo-400 to-indigo-700 px-5 py-5 rounded-xl shadow-xl mt-2 border-4 ml-5'>
      <p className='font-bold text-white block'>
        Nombre: <span className="font-normal">{producto.nombre}</span>
      </p>
      <p className='font-bold text-white block'>
        Descripción: <span className="font-normal">{producto.descripcion}</span>
      </p>
      <p className='font-bold text-white block'>
        Precio: <span className="font-normal">{producto.precio}</span>
      </p>
      <p className='font-bold text-white block'>
        Código: <span className="font-normal">{producto.codigo}</span>
      </p>
      <p className='font-bold text-white block'>
        Stock: <span className="font-normal">{producto.stock}</span>
      </p>
      <p className='font-bold text-white block'>
        Categoría: <span className="font-normal">{producto.categoria}</span>
      </p>
     

      <div className="mb-5 font-bold text-white">
          
          <img
            className="h-[250px] w-[250px] border border-white mx-auto "
            src={producto.image}
            alt=""
          />
      </div>
      
      <div>
        <button
          type="button"
          className='px-10 py-2 bg-green-500 border-2 border-white hover:bg-green-700 text-white rounded-xl mt-2 mx-3'
          onClick={() => setProducto(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className='px-10 py-2 bg-red-600 border-2 border-white hover:bg-red-800 text-white rounded-xl'
          onClick={handleEliminar}
        >
          Eliminar
        </button>
        
      </div>
    </div>
  );
}

export default Producto;
