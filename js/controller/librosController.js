const Url_Libros="http://localhost:3000/libros"


//Función para obtener libros
export async function llamarLibros(){
    /* 
    - se llama a los libros de la API
    - se crea una promesa
    - se ejecuta
    - se retorna
    
    * es importante no olvidar el try catch para capturar errores 
    */
    try {
      const response=await fetch(Url_Libros)
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