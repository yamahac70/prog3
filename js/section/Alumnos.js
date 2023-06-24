import { crearAlumno, eliminarAlumno, llamarAlumno,modificarAlumno } from "../controller/alumnosController.js";
const E=(a)=>document.getElementById(a);
const formulario= document.getElementById('formularioCreacion');
const listaAlumnos= document.getElementById('listaAlumnos');

formulario.addEventListener('submit', async(e)=>{
    e.preventDefault(); //para que no recargue la pagina 
    const form= new FormData(formulario); 
    const datos= Object.fromEntries(form); 
    
    const condicio=Object.keys(datos).some(key=>{
        
       return datos[key]!==""
    })
    if (condicio) {
                await crearAlumno(datos);
                await renderLista()
    }else{
        alert("rellene todos los campos")
    }
})
async function eliminarAlumnoEvent(alumno,li){
  
    try {
        console.log(alumno.id)
        li.remove();
        await eliminarAlumno(alumno.id);
        alert("Alumno Eliminado")
    } catch (error) {
        alert(error.message)
    }
}
async function modificarAlumnoEvent(alumno){
//tomamos el objeto con el id   
  console.log(alumno)
  const form1=formulario;
  const form=formulario.cloneNode(true);
  form.id=""
  formulario.remove();
  console.log(form)
  E("fr").appendChild(form);

  E("nombre").value=alumno.nombre;
  E("apellido").value=alumno.apellido;
 E("dni").value=alumno.dni;
  E("genero").value=alumno.genero;
  E("fechaNacimiento").value=alumno.fechaNacimiento;
  E("submitBtn").value="Modificar";

  form.addEventListener('submit',async(e)=>{
      try {
        
      
      e.preventDefault();
      const form0= new FormData(form);
      const datos= Object.fromEntries(form0);
      const condicio=Object.keys(datos).some(key=>{
          
         return datos[key]!==""
      })
      if (condicio) {
              await modificarAlumno(alumno.id,datos);
              await renderLista();
              form.remove()
              E("fr").appendChild(form1)
      }else{
          alert("rellene todos los campos")
      }
    } catch (error) {
        
    }
  })
}


async function renderLista(){
    listaAlumnos.innerHTML=""
    try {
        const alumnos=await llamarAlumno();
        const ol= document.createElement('ol');
        ol.classList.add('list-group','list-group-numbered');
        alumnos.forEach(alumno=>{
            //creamos la lista
            const li= document.createElement('li');
            li.textContent=alumno.nombre+" "+alumno.apellido;
            li.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
            //grupo de botones
            const btnGrupo= document.createElement('div');
            btnGrupo.classList.add('btn-group')
            btnGrupo.role="group";
            //boton para eliminar
            const btnEliminar= document.createElement('button');
            btnEliminar.textContent="Eliminar";
            btnEliminar.addEventListener('click',eliminarAlumnoEvent.bind(null,alumno,li))
            btnEliminar.classList.add('btn','btn-danger')
            //boton para editar
            const btnEditar= document.createElement('button');
            btnEditar.textContent="Editar";
            btnEditar.classList.add('btn','btn-warning')
            btnEditar.addEventListener('click',modificarAlumnoEvent.bind(null,alumno))
            //agregamos los hijos
            btnGrupo.appendChild(btnEliminar);
            btnGrupo.appendChild(btnEditar);
            li.appendChild(btnGrupo);
            ol.appendChild(li);
        })
        //agregamos la lista ol a lista alumnos
        listaAlumnos.appendChild(ol);

    } catch (error) {
        
    }
}


//modificarAlumno.addEventListener('click', renderLista)
window.addEventListener('load',renderLista)