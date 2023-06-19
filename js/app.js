import {llamarLibros,eliminarLibro} from './controller/librosController.js';
const listaLibros=document.getElementById("listaLibros")


async function renderLibros(){
 const libros=await llamarLibros(); //el api devuelve un Array 
  libros.forEach(libro => {
    //creamos parte del dom
    const li=document.createElement("li")
    li.innerText=libro.nombre
    listaLibros.appendChild(li)
    const img=document.createElement("img")
    img.src=libro.img
    img.width=100
    li.appendChild(img)
    const button=document.createElement("button")
    button.innerText="Eliminar"
    button.addEventListener("click",eliminarLibro.bind(null,libro.id,{padre:listaLibros,hijo:li}))
    li.appendChild(button)
    
  });
}




async function  main(){
    await renderLibros()


  
}



(async ()=>{
await main()
})()

