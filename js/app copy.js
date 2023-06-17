async function GetLibros(){
  try {
        const res=await fetch('http://localhost:3000/libros');
        const data=await res.json();
        console.log(data);
        return data;
  } catch (error) {
    console.log(error);
  }
}
async function getAlumnos(){
  try {
        const res=await fetch('http://localhost:3000/alumnos');
        const data=await res.json();
        console.log(data);
        return data;

  } catch (error) {
    console.log(error);
  }
}
async function getPrestamos(){
  try {
        const res=await fetch('http://localhost:3000/prestamos');
        const data=await res.json();
        console.log(data);
        return data;
  } catch (error) {
    console.log(error);
  }
}

async function LogicaPrestamos(){
    try {
        const prestamos=await getPrestamos();
        const libros=await GetLibros();
        const alumnos=await getAlumnos();
        return prestamos.filter(item=>{
            if(item.estado){
                const _alumno= alumnos.find(alumno=>{
                    return alumno.id==item.alumnoId
                })
                item.alumnoId=_alumno
                return item;
            }
        })
       // console.log(prestamos)
    } catch (error) {
        console.log(error);
    }
}


(async()=>{
    
    console.log(await LogicaPrestamos())
})()
