import React, { useState } from 'react';

const EjemploUseState2 = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [modelo, setModelo] = useState("");
  const [precio, setPrecio] = useState("");
  const [imagen, setImagen] = useState("");
  const [datosCompletos, setDatosCompletos] = useState(false);

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagen(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const borrarDatos = () => {
    setNombre("");
    setDescripcion("");
    setModelo("");
    setPrecio("");
    setImagen("");
    setDatosCompletos(false);
  };

  return (
    <div className="flex justify-center">
      <div className="container mx-auto p-4 flex ">
        <div className="w-1/2 pr-4 border border-gray-500 rounded ">
          <form className="flex flex-col gap-4">
            <label htmlFor="nombre" className="text-lg font-bold">
              Nombre del producto
            </label>
            <input
              type="text"
              id="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />

            <label htmlFor="descripcion" className="text-lg font-bold">
              Descripción
            </label>
            <input
              type="text"
              id="descripcion"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />

            <label htmlFor="modelo" className="text-lg font-bold">
              Modelo
            </label>
            <input
              type="text"
              id="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />

            <label htmlFor="precio" className="text-lg font-bold">
              Precio
            </label>
            <input
              type="number"
              id="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            />

            <label htmlFor="imagen" className="text-lg font-bold">
              Imagen (JPG o PNG)
            </label>
            <input
              type="file"
              id="imagen"
              accept=".jpg, .jpeg, .png"
              onChange={handleImagenChange}
              className="border border-gray-300 p-2 rounded"
            />
          </form>
          <button
            onClick={() => setDatosCompletos(!datosCompletos)}
            className="mt-4 p-2 bg-blue-500 text-white rounded font-bold"
          >
            Cambiar
          </button>
        </div>

        <div className="w-1/2 pl-4 border border-gray-500 rounded ">
          <h2 className="text-lg font-bold">Nombre: {datosCompletos ? nombre : ''}</h2>
          <h2 className="text-lg font-bold">Descripción: {datosCompletos ? descripcion : ''}</h2>
          <h2 className="text-lg font-bold">Modelo: {datosCompletos ? modelo : ''}</h2>
          <h2 className="text-lg font-bold">Precio: {datosCompletos ? precio : ''}</h2>
          {imagen && (
            <div>
              <h2 className="text-lg font-bold">Imagen:</h2>
              <img src={imagen} alt="Imagen seleccionada" className="max-w-sm" />
            </div>
          )}
          <button
            onClick={borrarDatos}
            className="mt-4 p-2 bg-red-500 text-white rounded font-bold"
          >
            Borrar datos
          </button>
        </div>
      </div>
    </div>
  );
};

export default EjemploUseState2;



