import React from 'react' //// Ya no es necesario pero se puede dejar

const Formulario = () => {
  return (
    <>
      <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='text-center font-black text-3xl'>Seguimiento Pacientes</h2>
        <p className='mb-10 text-lg mt-5 text-center'>Añade Pacientes y {' '}
          <span className='text-indigo-600 font-bold'>administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-lg py-10 px-5'>
          <div>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre mascota:
            </label>
            <input
                  id='mascota'
                  type='text'
                  placeholder='Nombre de mascota:'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
          </div>
        </form>
      </div>
    </>
  )
}

export default Formulario
