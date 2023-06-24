const Url_Libros="http://localhost:3000/libros"


//Función para obtener libros
export async function llamarLibros(id){
    /* 
    - se llama a los libros de la API
    - se crea una promesa
    - se ejecuta
    - se retorna
    
    * es importante no olvidar el try catch para capturar errores 
    */
    try {
      let response;
      if (id!==undefined) {
        response=await fetch(Url_Libros+`/${id}`)
        console.log(Url_Libros+`/${id}`)
      }else{
        response=await fetch(Url_Libros)
      }
      const libros=await response.json()
      return libros
  
    } catch (error) {
      alert("tengo un error")
      console.error(error)
    }
     
  
    
  }
  export async function eliminarLibro(id,dom){
    try {
      const confiramcion=confirm("quiere eliminar este libro?")
      if (confiramcion) {
        const r=await fetch(Url_Libros+"/"+id,{
          method:"DELETE",
     
        });
        dom.padre.removeChild(dom.hijo)
        alert("Libro Eliminado")
        
      }
        return null;
    } catch (error) {
      alert(error.message)
    }
}


export async function editarLibro(id,data){
    try {
        const r =await fetch(Url_Libros+`/${id}`,
        {
          method:"PATCH",
          body:JSON.stringify(data),
          headers:{
            "Content-Type": "application/json",
          }
        }

        );
        return true;
    } catch (error) {
      alert("error en la edicion")
      return false
    }
}
