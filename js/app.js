const Url_Libros="http://localhost:3000/libros"
const Url_Alumnos="http://localhost:3000/alumnos"
const Url_prestamos="http://localhost:3000/prestamos"
const Url_historial="http://localhost:3000/historial"

//Función para obtener libros
async function llamarLibros(){
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

//funcion crear libros
async function llamarAlumno(){
    try {
      const r=await fetch(Url_Alumnos);
      const alumnos=await r.json();
      return alumnos;

    } catch (error) {
      console.error(error)
    }
}

async function llamarPrestamos(){
    try {
      const r= fetch(Url_prestamos)
      const prestamos= r.json()

      return prestamos;
    } catch (error) {
      console.error(error)
    }
}

async function eliminarLibro(id){
    try {
      const confiramcion=confirm("quiere eliminar este libro?")
      if (confiramcion) {
        const r=await fetch(Url_Libros+"/"+id,{
          method:"DELETE",
     
        });
        alert("Libro Eliminado")
        
      }
        return null;
    } catch (error) {
      alert(error.message)
    }
}


async function  main(){
const listaLibros=document.getElementById("listaLibros")
  //const producto=10;
 const libros=await llamarLibros(); //el api devuelve un Array 
 console.log(libros)


  libros.forEach(libro => {
      listaLibros.innerHTML +=`
      <li>${libro.nombre}
        <img src=${libro.img} width="100px"><img/>
        <button onClick="eliminarLibro(${libro.id})">Eliminar</button>
      <li/>
      `
  });



  //console.log(await llamarAlumno())
  //console.log(await llamarPrestamos())
  
}



(async ()=>{
await main()
})()


//funcion editar libros

//funcion eliminar libros

/* [2,3,4,456,576,5,6]
{
  nombre:"mauro",
  apellido:"acosta"
}
[
{
  nombre:"ma"
},
{
  nombre:"pe"
}

] */