import { useState } from 'react'

    const EjemploUseState = () => {
        const [nombre, setNombre] = useState("Estefany");
        const [apellido, setApellido] = useState("FABIAN SINTI");
    return(
        <div className='border-black border-4 rounded-xl'>
            <h2>Nombre:{nombre}</h2>
            <h2>Apellidos:{apellido}</h2>
            <button className='bg-blue-500' onClick={
                ()=>{
                    setNombre("TEFI")
                    setApellido("ROMERO")
                }
            }>Cambiar</button>
        </div>
    )
}
export default EjemploUseState