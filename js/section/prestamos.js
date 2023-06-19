import { llamarLibros } from "../controller/librosController.js"
const librosStock=document.getElementById("librosStock")
const librosAprestar=document.getElementById("librosAprestar")

async function removerPrestamo(id,libro){
  console.log(id)
  const libro2=libro.cloneNode(true)
  libro2.addEventListener("click",aniadirPrestamo.bind(null,id,libro2))
  librosAprestar.removeChild(libro)
  librosStock.appendChild(libro2)

}




async function aniadirPrestamo(id,libro){
  console.log(id)
  console.log(libro)
  //clono el libro
  const l2=libro.cloneNode(true);
  l2.addEventListener("click",removerPrestamo.bind(null,id,l2))
  librosStock.removeChild(libro)
  librosAprestar.appendChild(l2)
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

window.addEventListener("load",main)