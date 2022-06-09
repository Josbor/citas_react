import React from 'react'

const Paciente = ({paciente,setPaciente,eliminarpaciente}) => {
  const {nombre,propietario,email,fecha,sintomas,id}=paciente
  const eliminarpac= ()=>{

    if(confirm){
      const resp=confirm('esta seguro?')

      if(resp){
        eliminarpaciente(id)
      }
      
    }
  }
  return (
    
    <div className=' mx-5 my-10 bg-white shadow-md  px-5 py-10 rounded-xl'>
          
            <p className='font-bold mb-3 text-gray-700 uppercase'> Nombre: {"  "} 
            <span className=' font-normal normal-case'>{nombre}</span>
            </p>
            
            <p className='font-bold mb-3 text-gray-700 uppercase'> Propietario: {'  '} 
            <span className=' font-normal normal-case'>{propietario}</span>
            </p>  
            
            <p className='font-bold mb-3 text-gray-700 uppercase'> Email: {'  '}
            <span className=' font-normal normal-case'>{email}</span>
            </p>  
            
            <p className='font-bold mb-3 text-gray-700 uppercase'> Fecha ALTA: {'  '} 
            <span className=' font-normal normal-case'>{fecha}</span>
            </p>  
            
            <p className='font-bold mb-3 text-gray-700 uppercase'> Sintomas: {'  '}
            <span className=' font-normal normal-case'>{sintomas} </span>
            </p>  
            <div className=' flex justify-between mt-10'>
              <button onClick={()=>{setPaciente(paciente)}} className='bg-blue-600 hover:bg-slate-800 text-white font-bold uppercase px-10 py-2 rounded-md'type="button">
                editar
              </button>
              <button onClick={eliminarpac} className='bg-red-600 hover:bg-red-800 text-white font-bold uppercase px-10 py-2 rounded-md' type="button">
                borrar
              </button>
            </div>
   
    </div>
  )
}

export default Paciente
