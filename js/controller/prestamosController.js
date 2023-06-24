import { editarLibro, llamarLibros } from "./librosController.js";

const Url_prestamos="http://localhost:3000/prestamos"
const Url_historial="http://localhost:3000/historial"



//funcion crear libros

export async function llamarPrestamos(llamado){


    try {
      const r= fetch(Url_prestamos)
      const prestamos= r.json()

      return prestamos;
    } catch (error) {
      console.error(error)
    }
}

export async function prestarLibros(obj){
          try {
              const condicionLibro=obj.libros.some(async(id,index)=>{
                  const libro=await llamarLibros(id)
                  return libro.estado==="D"
              })
              if (condicionLibro) {
                  console.log("premite prestar")
                  obj.libros.forEach(async id => {
                      await editarLibro(id,{estado:"P"})
                      await crearPrestamo(obj)
                    });
              }else{
                throw new Error("no se puede prestar libros ya prestados")
              }
          } catch (error) {
            console.log(error)
              throw error
          }
}
export async function crearPrestamo(obj={
  id:NaN,
  libros:[]
}){
      try {

        obj.libros.forEach(async idLibro=>{
            try {
              const fecha=new Date().toLocaleDateString().split("/")
              console.log(idLibro)
              const r=await fetch(Url_prestamos,{
                method:"POST",
                body:JSON.stringify({
                  idAlumno: obj.id,
                  idLibro: idLibro,
                  fechaPrestamo:`${fecha[2]}-${fecha[1]}-${fecha[0]}` ,
                  fechaDevolucion: ""
                })
              })
            } catch (error) {
              
            } 
        })

      } catch (error) {
        
      }
}