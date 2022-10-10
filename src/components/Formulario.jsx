import React from 'react' //// Ya no es necesario pero se puede dejar

const Formulario = () => {
  return (
    <>
      <div className='md:w-1/2 lg:w-2/5'>
        <h2 className='text-center font-black text-3xl'>Seguimiento Pacientes</h2>
        <p className='mb-10 text-lg mt-5 text-center'>Añade Pacientes y {' '}
          <span className='text-indigo-600 font-bold'>administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          <div className='mb-5'>
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
          <div className='mb-5'>
            <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
            Nombre propietario:
            </label>
            <input
                  id='propietario'
                  type='text'
                  placeholder='Nombre del propietario:'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
            Email:
            </label>
            <input
                  id='email'
                  type='email'
                  placeholder='Email de contacto del propietario:'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
          </div>
          <div className='mb-5'>
            <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
            Alta:
            </label>
            <input
                  id='alta'
                  type='date'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  />
          </div>
          <div className='mb-5'>
            <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
            Sintomas:
            </label>
            <textarea
              id='sintomas'
              className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
              placeholder='Describe los sintomas:'
            />
          </div>
          <input
            type='submit'
            className='bg-indigo-600 w-full p-3 cursor-pointer transition-all
                      text-white uppercase font-bold hover:bg-indigo-700'
            value='Agregar paciente'
          />
        </form>
      </div>
    </>
  )
}

export default Formulario
