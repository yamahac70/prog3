const Url_Alumnos="http://localhost:3000/alumnos"
export async function llamarAlumno(dniAlumno){



    try {
      
    
      
      const r=await fetch(Url_Alumnos);

      const alumnos=await r.json();


      if (dniAlumno!==undefined) {
        return alumnos.find((item,index)=>{
          return item.dni==dniAlumno
        })
      }else{
        return alumnos;

      }

    } catch (error) {
      throw error
    }
}

export async function eliminarAlumno(id){
    try {
      const confiramcion=confirm("quiere eliminar este Alumno?")
      if (confiramcion) {
        const r=await fetch(Url_Alumnos+"/"+id,{
          method:"DELETE",
     
        });
        alert("Alumno Eliminado")
        
      }
        return null;
    } catch (error) {
      throw error
    }
  }
  
export async function crearAlumno(obj){
  try {
      const r=await fetch(Url_Alumnos,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(obj)
      })
  } catch (error) {
      alert(error.message)
  }
}

export async function modificarAlumno(id,data){
  try {
      const r=await fetch(Url_Alumnos+"/"+id,{
        method:"PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      })
  } catch (error) {
      alert(error.message)
  }
  
}
