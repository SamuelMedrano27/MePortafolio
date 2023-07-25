import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoClientes from './components/ListadoClientes';

export default function Home() {
  const [clientes, setClientes] = useState([]);
  const [cliente, setCliente] = useState('');

  const eliminarCliente = (id) => {
    const nuevosClientes = clientes.filter((cliente) => cliente.id !== id);
    setClientes(nuevosClientes);
  };

  return (
    <div className='container mx-auto  bg-gray-400 text-white'>
      <Header />
      <div className='flex mt-5 ml-5'>
        <Formulario clientes={clientes} setClientes={setClientes} cliente={cliente} setCliente={setCliente} className='bg-indigo-600' />
        <div className='w-5'></div> {/* Separación de 5px entre el formulario y el listado */}
        <ListadoClientes clientes={clientes} setCliente={setCliente} eliminarCliente={eliminarCliente} className='border-black' />
      </div>
    </div>
  );
}












