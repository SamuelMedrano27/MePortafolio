import React from 'react'
import Producto from './Producto'

const ListadoProductos = ({ productos, setProducto, eliminarProducto }) => {
  return (
    <div className="w-full h-[640px] overflow-y-scroll px-10">
      <h2 className='font-black text-2xl text-center'>Listado de Productos</h2>
      <p className='font-bold text-center text-white'>Editar y Eliminar Productos</p>
      {productos.map((producto) => (
        <Producto
          key={producto.id}
          producto={producto}
          setProducto={setProducto}
          eliminarProducto={eliminarProducto}
        />
      ))}
    </div>
  );
};

export default ListadoProductos;