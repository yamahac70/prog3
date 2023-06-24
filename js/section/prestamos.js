import { llamarAlumno } from "../controller/alumnosController.js"
import { llamarLibros } from "../controller/librosController.js"
import { prestarLibros } from "../controller/prestamosController.js";
const librosStock=document.getElementById("librosStock")
const librosAprestar=document.getElementById("librosAprestar")
const E=(a)=>document.getElementById(a);
let librosPrestar={
id:1,
libros:[

]

};

const l=[{id:1,nombre:"roberto"},{id:2,nombre:"juan"},{id:3,nombre:"maria"},{id:4,nombre:"juan"}]
console.log(l.filter(it=>it.nombre==="juan"))
async function removerPrestamo(id,libro){
  console.log(id)
  const libro2=libro.cloneNode(true)
  libro2.addEventListener("click",aniadirPrestamo.bind(null,id,libro2))
  librosAprestar.removeChild(libro)
  librosStock.appendChild(libro2)
  librosPrestar.libros=librosPrestar.libros.filter(libro=>libro!=id)
  console.log(librosPrestar)
}




async function aniadirPrestamo(id,libro){
 /*  console.log(id)
  console.log(libro) */
  //clono el libro

  const l2=libro.cloneNode(true);
  l2.addEventListener("click",removerPrestamo.bind(null,id,l2))
  librosStock.removeChild(libro)
  librosAprestar.appendChild(l2)
  librosPrestar.libros.push(id)
  console.log(librosPrestar)

}


async function renderLibros(){
 
    const libros=await llamarLibros()  
    console.log(libros)
    await libros.forEach((item,index)=>{
    const itemList=document.createElement("span")
        itemList.classList.add("list-group-item")
        itemList.classList.add("list-group-item-action")
        itemList.innerText=item.nombre    
        itemList.addEventListener("click",aniadirPrestamo.bind(null,item.id,itemList))
        librosStock.appendChild(itemList)
    })

    


}



async function main(){
    await renderLibros()

}

async function buscarAlumno(){
  try {
    
  
  const dniDeAlumno=E("alumnoDni")
  const alumno=await llamarAlumno(Number(dniDeAlumno.value))
  console.log(alumno)

  if (alumno.length>0 || alumno!==undefined) {
    
  
  const card=document.createElement("div")
  card.classList.add("card")
  card.style.width="18rem"
  const cardHeader=document.createElement("div")
  cardHeader.classList.add("card-header")
  cardHeader.innerText=alumno.nombre+" "+alumno.apellido
  const cardLista=document.createElement("ul")
  cardLista.classList.add("list-group","list-group-flush")
 const  cardLiFechaNacimiento=document.createElement("li")
  cardLiFechaNacimiento.classList.add("list-group-item")
  cardLiFechaNacimiento.innerText="Fecha Nacimiento: "+alumno.fechaNacimiento
  E("datosAlumno").appendChild(card)
  card.appendChild(cardHeader)
  card.appendChild(cardLista)
  cardLista.appendChild(cardLiFechaNacimiento)
  E("seccionLibros").style.display="block"
  librosPrestar.id=alumno.id
}else{
  const alertDanger=document.createElement("div")
  alertDanger.classList.add("alert","alert-danger")
  alertDanger.innerText="No existe el Alumno"
  E("seccionLibros").appendChild(alertDanger)
}
} catch (error) {
    alert("error")
    console.log(error)
}
}


async function PrestarLibros(){
    try {
        const confirmacion=confirm("Desea Prestar?")
        if (confirmacion) {
           await  prestarLibros(librosPrestar)
        }else{

        }
    } catch (error) {
      
    }
}






E("btnPrestar").addEventListener("click",PrestarLibros)
E("busquedaBtn").addEventListener("click",buscarAlumno)
window.addEventListener("load",main)