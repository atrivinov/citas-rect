import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
      <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
            <span className='font-normal normal-case'>Bruno Alexander</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Propietario: {''}
            <span className='font-normal normal-case'>Alexandra Triviño</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Correo: {''}
            <span className='font-normal normal-case'>alexandratrivino2@gmail.com</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha alta: {''}
            <span className='font-normal normal-case'>10/12/2022</span>
          </p>
          <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
            <span className='font-normal normal-case'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium expedita quidem ad sequi recusandae repellat quisquam a, itaque totam porro! Impedit non error rem! Repudiandae ab eveniet minima officia consequatur. </span>
          </p>
    </div>
  )
}

export default Paciente
