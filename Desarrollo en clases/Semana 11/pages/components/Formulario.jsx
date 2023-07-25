import React, { useState, useEffect, useRef } from 'react';
import Error from './Error';
import defaultImage from '../src/user.png'; // Ruta de la imagen predeterminada

const Formulario = ({ clientes, setClientes, cliente, setCliente }) => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDNI] = useState('');
  const [email, setEmail] = useState('');
  const [direccion, setDireccion] = useState('');
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState(false);
  const imagenInputRef = useRef(null);

  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
      setNombre(cliente.nombre);
      setApellido(cliente.apellido);
      setDNI(cliente.dni);
      setEmail(cliente.email);
      setDireccion(cliente.direccion);
      setImagen(cliente.imagen);
    }
  }, [cliente]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([nombre, apellido, dni, email, direccion].includes('')) {
      setError(true);
      return;
    }
    if (imagen === null) {
      setError(true);
      return;
    }
    const newCliente = {
      nombre,
      apellido,
      dni,
      email,
      direccion,
    };

    if (imagen !== null) {
      if (typeof imagen === 'string') {
        newCliente.imagen = imagen; // Conservar la URL existente
      } else {
        newCliente.imagen = URL.createObjectURL(imagen); // Utilizar directamente la imagen seleccionada
      }
    } else {
      newCliente.imagen = defaultImage; // Establecer la imagen predeterminada si no se selecciona una nueva
    }

    if (cliente.id) {
      // MODO EDITAR
      newCliente.id = cliente.id;
      const clientesActualizados = clientes.map((clienteState) =>
        clienteState.id === cliente.id ? newCliente : clienteState
      );
      setClientes(clientesActualizados);
      setCliente({});
    } else {
      // MODO AGREGAR
      newCliente.id = generarId();
      setClientes([...clientes, newCliente]);
    }

    setNombre('');
    setApellido('');
    setDNI('');
    setEmail('');
    setDireccion('');
    setImagen(null);
    setError(false);
    imagenInputRef.current.value = null;
  };

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const aleatorio = Math.random().toString(36).substring(2);
    return fecha + aleatorio;
  };

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-2xl text-center'>Formulario de Clientes</h2>
      <p className='font-bold text-center text-indigo-500'>Ingreso de Datos</p>

      <form
        className='bg-indigo-600 px-5 py-5 rounded-xl shadow-xl mt-2 border-black '
        onSubmit={handleSubmit}
      >
        {error && <Error texto='Todos los campos son obligatorios' />}

        <div className='mb-3'>
          <label htmlFor='nombre' className='font-bold text-gray-100 block'>
            Nombre del Cliente:
          </label>
          <input
            id='nombre'
            type='text'
            className='w-full border-2 p-2 rounded-lg text-black'
            
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='apellido' className='font-bold text-gray-100 block '>
            Apellido del Cliente:
          </label>
          <input
            id='apellido'
            type='text'
            className='w-full border-2 p-2 rounded-lg text-black'
           
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='dni' className='font-bold text-gray-100 block'>
            DNI del Cliente:
          </label>
          <input
            id='dni'
            type='number'
            className='w-full border-2 p-2 rounded-lg text-black'
            
            value={dni}
            onChange={(e) => setDNI(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='email' className='font-bold text-gray-100 block'>
            Email del Cliente:
          </label>
          <input
            id='email'
            type='email'
            className='w-full border-2 p-2 rounded-lg text-black'
           
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='direccion' className='font-bold text-gray-100 block'>
            Dirección del Cliente:
          </label>
          <input
            id='direccion'
            type='text'
            className='w-full border-2 p-2 rounded-lg text-black'
            
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='imagen' className='font-bold text-gray-100 block'>
            Imagen del Cliente:
          </label>
          {imagen !== null ? (
            <img
              src={typeof imagen === 'string' ? imagen : URL.createObjectURL(imagen)}
              alt=''
              className='w-32 h-32 object-cover rounded-full mx-auto mb-2 border-2 border-white'
            />
          ) : (
            <img
              src={defaultImage}
              alt=''
              className='w-32 h-32 object-cover rounded-full mx-auto mb-2 border-2 border-white'
            />
          )}
          <input
            id='imagen'
            type='file'
            className='w-full border-2 p-2 rounded-lg'
            accept='image/*'
            ref={imagenInputRef}
            onChange={handleImageChange}
          />
        </div>

        <div className='flex justify-center'>
          <button
            type='submit'
            className='px-10 py-2 bg-green-500 border-2 border-white hover:bg-green-700 text-white rounded-xl'
          >
            {cliente.id ? 'Guardar Cambios' : 'Agregar Cliente'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;










