import React from 'react'
import {useState,useEffect} from 'react'
import AlertaError from './AlertaError'
 // NOTA: los props solo puede pasarse de app a hijos , asi que para enviar datos desde este componente se crea una funcion desde app y se envia como props a este componente
export default function Formulario({pacientes,setPacientes,paciente,setPaciente}) {// son props que vienen del padre
    const [nombre,setNombre]=useState('')
    const [propietario,setPropietario]=useState('')
    const [email,setEmail]=useState('')
    const [fecha,setFecha]=useState('')
    const [sintomas,setSintomas]=useState('')

    const[error,setError]=useState(false)
 

    useEffect(() => {
     if(Object.keys(paciente).length>0)// verifica si el objeto esta vacio 
     {
        setNombre(paciente.nombre)
        setPropietario(paciente.propietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
     }
    
    }, [paciente])
    
   const handlesubmit=(e)=>{
           
            e.preventDefault();
            //validacion Formulario
            const generarkey=()=>{
                const fecha= Date.now().toString(36)
                const random=Math.random().toString(36).substring(2)
                return random+fecha;

            }

            if ([nombre,propietario,email,fecha,sintomas].includes(''))//aqui se metio todas las variables en un arreglo para validar su contenido 
            {                                                           // el includes es para verificar cada indice de este arreglo
                
                setError(true)
                return; // corta  la funcion hasta alli evitando que se ejecute las demas lineas
            }                                                            
            setError(false)
            const objetopaciente={ // colocamos todos los datos en un objeto
                    nombre,
                    propietario,
                    email,
                    fecha,
                    sintomas,
                    
                }
          // añado el objeto al array del state del app
          
          // vacio los campos luego de ingresar al paciente
            
          if (paciente.id){
              //MODIFICA PACIENTE
              objetopaciente.id=paciente.id
            const objetopacientesactualizados=pacientes.map(pacienteState=> pacienteState.id===objetopaciente.id?objetopaciente:pacienteState)
            setPacientes(objetopacientesactualizados)
          }else{
              // AGREGA PACIENTE
            objetopaciente.id=generarkey()
            setPacientes([...pacientes ,objetopaciente]); 
            
          }
          setNombre('');
          setPropietario('');
          setEmail('');
          setFecha('');
          setSintomas('');
          setPaciente({})
                
            }
   
 
    return (
    <div className='md:w-1/2 lg:w-2/5 mx-5'>
                <h2 className='font-black text-2xl text-center'>Seguimiento Pacientes</h2>
                <p className='text-lg mt-5 text-center mb-10 '> Añade Pacientes y {''}
                    <span className='text-indigo-600 font-bold'>Administralos</span>
                </p>
                <form   onSubmit={handlesubmit}
                        className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'

                
                >
                    {error&&<AlertaError><p> todos los campos son obligatorios </p></AlertaError>}

                    <div className='mb-5' >
                        <label htmlFor="mascota" className='block font-bold text-gray-700  uppercase'> Nombre Mascota</label>

                        <input 
                              id='mascota'
                              type="text" 
                              placeholder='Nombre de la Mascota'
                              className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md '
                              value={nombre}
                              onChange={(e)=>setNombre(e.target.value)}
                              
                        />
                    </div>
                    <div className='mb-5' >
                        <label htmlFor="propietario" className='block font-bold text-gray-700  uppercase'> Nombre del propietario</label>

                        <input 
                              id='propietario'
                              type="text" 
                              placeholder='Nombre del Propietario'
                              className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md '
                              value={propietario}
                              onChange={(e)=>setPropietario(e.target.value)}
                        />
                    </div>
                    <div className='mb-5' >
                        <label htmlFor="email" className='block font-bold text-gray-700  uppercase'> Email</label>

                        <input 
                              id='email'
                              type="email" 
                              placeholder='Email contacto del Propietario'
                              className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md '
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-5' >
                        <label htmlFor="alta" className='block font-bold text-gray-700  uppercase'> Alta</label>

                        <input 
                              id='alta'
                              type="date" 
                              placeholder='Nombre de la Mascota'
                              className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md '
                              value={fecha}
                              onChange={(e)=>setFecha(e.target.value)}
                        />
                    </div>
                    <div className='mb-5' >
                        <label htmlFor="sintomas" className='block font-bold text-gray-700  uppercase'> Sintomas</label>

                        <textarea  id="sintomas" 
                                   className='border-2 w-full p-2 mt-2 placeholder-slate-400 rounded-md '
                                   placeholder='Por favor describa los sintomas'
                                   value={sintomas}
                                   onChange={(e)=>setSintomas(e.target.value)}
                        
                        />

                        
                    </div>
                    
                    <input type="submit" 
                           className='bg-indigo-600 w-full p-3 text-white uppercase font-bold 
                           hover:bg-indigo-800 cursor-pointer transition-all'
                           value={paciente.id?'editar paciente':'agregar paciente'}
                    
                    />
                    
                
                </form>
   
   
    </div>
  )
}
