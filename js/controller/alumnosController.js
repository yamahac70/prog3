const Url_Alumnos="http://localhost:3000/alumnos"
export async function llamarAlumno(){
    try {
      const r=await fetch(Url_Alumnos);
      const alumnos=await r.json();
      return alumnos;

    } catch (error) {
      console.error(error)
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
      alert(error.message)
    }
  }
  