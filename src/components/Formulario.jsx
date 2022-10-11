import React from 'react' //// Ya no es necesario pero se puede dejar
import { useState, useEffect } from "react";
import Error from './Error'

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombre, setNombre] = useState('')
  const [propietario, setPropietario] = useState('')
  const [email, setEmail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSintomas] = useState('')

  const [error, setError] = useState(false)

  useEffect(() => {
    if(Object.keys(paciente).length > 0)
    {
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () => {
    const random = Math.random().toString(36)
    const fecha = Date.now.toString(36)
    return random + fecha;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    ///Validacion de formulario
    if ([nombre, propietario, fecha, email, sintomas].includes(''))
    {
      setError(true)
      return;
    }

    setError(false)

    //Objeto paciente
    const objetoPaciente = {
      nombre,
      propietario,
      fecha,
      email,
      sintomas
    }

    if(paciente.id){
      //Editando un registro
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)
      setPaciente({}) ///Limpiando el objeto actual
    }
    else{
      //Nuevo registro
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente])
    }

    //Reiniciando el form
    setNombre('')
    setPropietario('')
    setFecha('')
    setSintomas('')
    setEmail('')
  }

  return (
    <>
      <div className='md:w-1/2 lg:w-2/5 mx-5'>
        <h2 className='text-center font-black text-3xl'>Seguimiento Pacientes</h2>
        <p className='mb-10 text-lg mt-5 text-center'>Añade Pacientes y {' '}
          <span className='text-indigo-600 font-bold'>administralos</span>
        </p>

        <form className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'
              onSubmit={handleSubmit}
        >
        { error && <Error><p>Todos los campos son obligatorios</p></Error> }
          <div className='mb-5'>
            <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
            Nombre mascota:
            </label>
            <input
                  id='mascota'
                  type='text'
                  placeholder='Nombre de mascota:'
                  className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                  value={nombre}
                  onChange={ (e) => setNombre(e.target.value) }
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
                  value={propietario}
                  onChange={ (e) => setPropietario(e.target.value) }
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
                  value={email}
                  onChange={ (e) => setEmail(e.target.value) }
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
                  value={fecha}
                  onChange={ (e) => setFecha(e.target.value) }
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
              value={sintomas}
              onChange={ (e) => setSintomas(e.target.value) }
            />
          </div>
          <input
            type='submit'
            className='bg-indigo-600 w-full p-3 cursor-pointer transition-all
                      text-white uppercase font-bold hover:bg-indigo-700'
            value={ paciente.id ? 'Editar paciente' : 'Agregar paciente'}
          />
        </form>
      </div>
    </>
  )
}

export default Formulario
