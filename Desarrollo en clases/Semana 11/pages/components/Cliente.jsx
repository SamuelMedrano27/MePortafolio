import React from 'react';

function Cliente({ cliente, setCliente, eliminarCliente }) {
  const handleEliminar = () => {
    const respuesta = window.confirm("¿Desea eliminar el cliente?");

    if (respuesta) {
      eliminarCliente(cliente.id);
    }
  };

  return (
    <div className='bg-red-500 px-5 py-5 rounded-xl shadow-xl mt-2 border-4 ml-5'>
      <p className='font-bold text-white block'>
        Nombre: <span className='font-normal'>{cliente.nombre}</span>
      </p>
      <p className='font-bold text-white block'>
        Apellido: <span className='font-normal'>{cliente.apellido}</span>
      </p>
      <p className='font-bold text-white block'>
        DNI: <span className='font-normal'>{cliente.dni}</span>
      </p>
      <p className='font-bold text-white block'>
        Email: <span className='font-normal'>{cliente.email}</span>
      </p>
      <p className='font-bold text-white block'>
        Dirección: <span className='font-normal'>{cliente.direccion}</span>
      </p>
      {cliente.imagen && (
        <div className="flex justify-center">
          <img
            src={cliente.imagen}
            alt={cliente.nombre}
            className='my-4 object-contain max-w-full h-40'
          />
        </div>
      )}
      <div>
        <button
          type='button'
          className='px-10 py-2 bg-green-500 border-2 border-white hover:bg-green-700 text-white rounded-xl mt-2 mx-3'
          onClick={() => setCliente(cliente)}
        >
          Editar
        </button>
        <button
          type='button'
          className='px-10 py-2 bg-red-600 border-2 border-white hover:bg-red-800 text-white rounded-xl'
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Cliente;