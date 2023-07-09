
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {
    const {nombreM, nombreP, email,fecha,sintomas,id} = paciente
    const handleEliminar = () =>{
        const respuesta = confirm('Deseas eliminar ese paciente?')
        if(respuesta){
            eliminarPaciente(id)
        }
    }
  return (
    <div className="mx-3 my-10 bg-white shadow-md px-5 py-10 rounded-xl ">
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Nombre: {''}
            <span className="font-normal normal-case">{nombreM}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Propietario: {''}
            <span className="font-normal normal-case">{nombreP}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Email: {''}
            <span className="font-normal normal-case">{email}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Fecha alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
          </p>
          <p className="font-bold mb-3 text-gray-700 uppercase">
            Sintomsa {''}
            <span className="font-normal normal-case">{sintomas}</span>
          </p>

          <div className="flex justify-between mt-10">
            <button onClick={() => setPaciente(paciente)} className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase rounded-lg" type="button">Editar</button>
            <button onClick={handleEliminar} className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase rounded-lg" type="button">Eliminar</button>
          </div>
    </div>
  )
}

export default Paciente