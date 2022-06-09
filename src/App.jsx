import { useState, useEffect } from 'react'
import Header from './componentes/Header'
import Formulario from './componentes/Formulario'
import ListadoPacientes from './componentes/ListadoPacientes'



 // EN JSX ES UNA EXTENSION  DONDE SE PUEDE USAR EL HTML USANDO TODAS LAS FUNCIONES DE JAVASCRIPT


// si una etiqueta html tiene apertura es necesario cerrarla sino genera error

// las etiquestas abiertas como <img> osea que no requiere cierre  solo se debe colocar / antes del > ejemplo: <img/>


// solo se puede retornar un elemento en el nivel mas alto de etiqueta
function App() {
 const [pacientes,setPacientes]=useState(JSON.parse(localStorage.getItem('pacientes'))??[]);
 const [paciente,setPaciente]=useState({})

 

 useEffect(()=>{
   localStorage.setItem('pacientes',JSON.stringify(pacientes))
 },[pacientes])



 const eliminarpaciente=id=>{
      const pacientesupdate=pacientes.filter((pacientStatus)=>pacientStatus.id!==id)
      setPacientes(pacientesupdate)
      }
  return (
   <div className="container mx-auto mt-20">
      <Header/>
      <div className='mt-12 md:flex'>
          <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}

          />
          <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarpaciente={eliminarpaciente}
          />     
      </div>
   </div>
  )
}
// dentro del return se puede ejecutar ternarios y funciones  pero no sentencias 
// solo son aceptadas expresiones
export default App
