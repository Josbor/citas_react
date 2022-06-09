import React from 'react'
import Paciente from './Paciente'


function ListadoPacientes({pacientes,setPaciente,eliminarpaciente}) {


  
  return (
    <>
    {pacientes && pacientes.length?

              <div className='className=md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
              
              <h2 className='font-black text-2xl text-center'>Listado Pacientes</h2>
              <p className='text-xl mt-5 mb-10 text-center'>
                Administra tus {''}
                <span className='text-indigo-600  text-2x1 font-bold'> Pacientes y Citas</span>
              </p>
              {pacientes.map((paciente)=>
              
              <Paciente 
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarpaciente={eliminarpaciente}
                  />
              
              )}
              
              
              </div>
      
      : 
              <div className='className=md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll'>
                  
                  <h2 className='font-black text-2xl text-center'>No hay Pacientes</h2>
                  <p className='text-xl mt-5 mb-10 text-center'>
                    Comienza agregando Pacientes y {''}
                    <span className='text-indigo-600  text-2x1 font-bold'>apareceran en este lugar</span>
                  </p>
              </div>
      }
    </>
  )  
}

export default ListadoPacientes
