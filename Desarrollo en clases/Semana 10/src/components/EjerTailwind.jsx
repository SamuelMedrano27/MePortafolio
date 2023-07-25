import { useState } from 'react'

function EjerTailwind() {
  return (
    <>
      <div>
        <h1 className='text-slate-500 text-xl' >Uso de Hooks</h1>
        <div className='container mx-auto flex gap-5'></div>
          <div className='bg-purple-600 w-1/5 '>Estefany</div>
          <div className='bg-blue-500 w-2/5'>Juanjose</div>
          <div className='bg-gray-400 w-2/5'>Sadith</div>
      </div>
      <div className='container mx-auto '>
        <div className='grid grid-cols-4 gap-x-10'>
          <div className='bg-red-400'>ROJO</div>
          <div className='bg-green-400'>VERDE</div>
          <div className='bg-blue-400'>AZUL</div>
          <div className='bg-purple-400'>MORADO</div>
          <div className='bg-gray-400'>Gray</div>
        </div>
      </div>
    </>
  )
}

export default EjerTailwind