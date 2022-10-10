import React from 'react' //// Ya no es necesario pero se puede dejar

const Formulario = () => {
  return (
    <>
      <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='text-center font-black text-3xl'>Seguimiento Pacientes</h2>
        <p className='text-lg mt-5 text-center'>Añade Pacientes y {' '} <span className='text-indigo-600 font-bold'>administralos</span></p>
      </div>
    </>
  )
}

export default Formulario
