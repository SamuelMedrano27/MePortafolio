import React from 'react';
import Cliente from './Cliente';

const ListadoClientes = ({ clientes, setCliente, eliminarCliente }) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
      <h2 className='font-black text-2xl text-center'>Listado de Clientes</h2>
      <p className='font-bold text-center text-red-500'>Editar y Eliminar Clientes</p>
      {clientes.map((cliente) => (
        <div key={cliente.id} className=' rounded-lg p-4 mb-4'>
          <Cliente
            cliente={cliente}
            setCliente={setCliente}
            eliminarCliente={eliminarCliente}
          />
        </div>
      ))}
    </div>
  );
};

export default ListadoClientes;


