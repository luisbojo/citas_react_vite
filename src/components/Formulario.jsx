import { useState, useEffect } from 'react'
import Error from './Error';

const Formulario = ({setPacientes,pacientes,paciente,setPaciente}) => {
  const [nombreM, setNombreM] = useState('');
  const [nombreP, setNombreP] = useState('');
  const [email, setEmail] = useState('');
  const [fecha, setFecha] = useState('');
  const [sintomas, setSintomas] = useState('');

  const [error, setError] = useState(false);

  useEffect(() =>{
    if(Object.keys(paciente).length > 0){
      setNombreM(paciente.nombreM)
      setNombreP(paciente.nombreP)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  },[paciente])

  const generarId = () =>{
    const random = Math.random().toString(36).substr(2)
    const fecha = Date.now().toString(36)

    return fecha+random
  }


  const handleSubmit = (e) =>{
    e.preventDefault();

    //Valida formulario

    if([nombreM, nombreP, email, fecha, sintomas].includes('')){
      setError(true)
      return;
    }
    setError(false)
    console.log('Enviado formulario')

    const ObjetoPaciente = {
      nombreM,
      nombreP,
      email,
      fecha,
      sintomas,
    }

    if(paciente.id){
      //Editando el registro
      ObjetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? ObjetoPaciente : pacienteState)
      setPacientes(pacientesActualizados)

      setPaciente({})

    }else{
      //Nuevo registro
      ObjetoPaciente.id = generarId()
      setPacientes([...pacientes,ObjetoPaciente ])
    }


    //Reinicirar form
    setNombreM('')
    setNombreP('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
        <h2 className="font-black text-3xl text-center">Seguimiento pacientes</h2>
        <p className='text-lg mt-5 text-center mb-10'>
          Añade pacientes y {''}
          <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>


        <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
          {error && 
            <Error>
              <h2>Error: todos los campos son obligatorios</h2>
            </Error>
          }
          <div className="mb-5">
            <label htmlFor="mascota" className="block text-grey-700 uppercase font-bold">
              Nombre mascota
            </label>
            <input id='mascota' value={nombreM} onChange={(e) => setNombreM(e.target.value)} type="text" placeholder='Nombre de la mascota' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="propietario" className="block text-grey-700 uppercase font-bold">
              Nombre propietario
            </label>
            <input id='propietario' value={nombreP} onChange={(e) => setNombreP(e.target.value)}  type="text" placeholder='Nombre del propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block text-grey-700 uppercase font-bold">
              Email
            </label>
            <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email contacto propietario' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="alta" className="block text-grey-700 uppercase font-bold">
              Fecha de alta
            </label>
            <input id='alta' type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder='Fecha de la alta' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
          </div>
          <div className="mb-5">
            <label htmlFor="sintomas" className="block text-grey-700 uppercase font-bold">
              Sintomas
            </label>
            <textarea id='sintomas' value={sintomas} onChange={(e) => setSintomas(e.target.value)} placeholder='Describe los sintomas' className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"></textarea>
          </div>
          <input type="submit" value={paciente.id ? 'Editar paciente' :'Agregar paciente'} className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer rounded-md transition-colors" />
        </form>
    </div>
  )
}

export default Formulario
